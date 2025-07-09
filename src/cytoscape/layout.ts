import { NodeCollection, NodeSingular } from 'cytoscape';
import { ANIMATE, ANIMATE_DURATION, ANIMATE_EASE, FIT } from './const';

interface FullFCoseLayoutOptions {
  name: 'fcose';
  quality: 'draft' | 'default' | 'proof';
  randomize: boolean;
  animate: boolean;
  animationDuration: number;
  animationEasing: any;
  fit: boolean;
  padding: number;
  nodeDimensionsIncludeLabels: boolean;
  uniformNodeDimensions: boolean;
  packComponents: boolean;
  step: string;
  samplingType: boolean;
  sampleSize: number;
  nodeSeparation: number;
  piTol: number;
  nodeRepulsion: (node: any) => number;
  idealEdgeLength: (edge: any) => number;
  edgeElasticity: (edge: any) => number;
  nestingFactor: number;
  numIter: number;
  tile: boolean;
  tilingCompareBy: (nodeId1: string, nodeId2: string) => number;
  tilingPaddingVertical: number;
  tilingPaddingHorizontal: number;
  gravity: number;
  gravityRangeCompound: number;
  gravityCompound: number;
  gravityRange: number;
  initialEnergyOnIncremental: number;
  fixedNodeConstraint: { nodeId: string; position: { x: number; y: number } }[];
  alignmentConstraint: { vertical?: string[][]; horizontal?: string[][] }[];
  relativePlacementConstraint: (
    | { top: string; bottom: string; gap: number }
    | { top: string; bottom: string; gap: number }
  )[];
  ready: () => void;
  stop: () => void;
}

type FCoseLayoutOptions = Partial<FullFCoseLayoutOptions>;

const defaultFcoseLayoutOptions = {
  name: 'fcose',
  // 'draft', 'default' or 'proof'
  // - "draft" only applies spectral layout
  // - "default" improves the quality with incremental layout (fast cooling rate)
  // - "proof" improves the quality with incremental layout (slow cooling rate)
  quality: 'proof',
  // Use random node positions at beginning of layout
  // if this is set to false, then quality option must be "proof"
  randomize: false,
  // Whether or not to animate the layout
  animate: ANIMATE,
  // Duration of animation in ms, if enabled
  animationDuration: ANIMATE_DURATION,
  // Easing of animation, if enabled
  animationEasing: ANIMATE_EASE,
  // Fit the viewport to the repositioned nodes
  fit: FIT,
  // Padding around layout
  padding: 30,
  // Whether to include labels in node dimensions. Valid in "proof" quality
  nodeDimensionsIncludeLabels: false,
  // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
  uniformNodeDimensions: false,
  // Whether to pack disconnected components - cytoscape-layout-utilities extension should be registered and initialized
  packComponents: true,
  // Layout step - all, transformed, enforced, cose - for debug purpose only
  step: 'all',

  /* spectral layout options */

  // False for random, true for greedy sampling
  samplingType: true,
  // Sample size to construct distance matrix
  sampleSize: 25,
  // Separation amount between nodes
  nodeSeparation: 75,
  // Power iteration tolerance
  piTol: 0.0000001,

  /* incremental layout options */

  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: () => 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: () => 50,
  // Divisor to compute edge forces
  edgeElasticity: () => 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Maximum number of iterations to perform - this is a suggested value and might be adjusted by the algorithm as required
  numIter: 2500,
  // For enabling tiling
  tile: true,
  // The comparison function to be used while sorting nodes during tiling operation.
  // Takes the ids of 2 nodes that will be compared as a parameter and the default tiling operation is performed when this option is not set.
  // It works similar to ``compareFunction`` parameter of ``Array.prototype.sort()``
  // If node1 is less then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a negative value
  // If node1 is greater then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a positive value
  // If node1 is equal to node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return 0
  tilingCompareBy: undefined,
  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,
  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity force (constant)
  gravity: 0.25,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout
  initialEnergyOnIncremental: 0.3,

  /* constraint options */

  // Fix desired nodes to predefined positions
  // [{nodeId: 'n1', position: {x: 100, y: 200}}, {...}]
  fixedNodeConstraint: undefined,
  // Align desired nodes in vertical/horizontal direction
  // {vertical: [['n1', 'n2'], [...]], horizontal: [['n2', 'n4'], [...]]}
  alignmentConstraint: undefined,
  // Place two nodes relatively in vertical/horizontal direction
  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}, {...}]
  relativePlacementConstraint: undefined,

  /* layout event callbacks */
  ready: () => {}, // on layoutready
  stop: () => {}, // on layoutstop
};

// 布局构造器
export const fcose = (overrideOptions?: FCoseLayoutOptions) => {
  const options = { ...defaultFcoseLayoutOptions, ...overrideOptions };
  const hooks: Record<string, any[]> = {};
  const api = {
    incremental() {
      options.randomize = false;
      options.quality = 'proof';
      return this;
    },
    randomize() {
      options.randomize = true;
    },
    fix(nodes: NodeCollection) {
      const fixedNodeConstraint = nodes
        .nodes()
        .not(':parent')
        .map((node: NodeSingular) => ({
          nodeId: node.id(),
          position: node.position(),
        }));
      options.fixedNodeConstraint = fixedNodeConstraint;
      return this;
    },
    animate(animOptions: false | { duration: number; ease: any }) {
      if (animOptions === false) {
        options.animate = false;
      } else {
        options.animate = true;
        options.animationDuration = animOptions?.duration ?? options.animationDuration;
        options.animationEasing = animOptions?.ease ?? options.animationEasing;
      }
      return this;
    },
    ready(fn: () => void) {
      if (!hooks.ready) {
        hooks.ready = [];
        options.ready = () => {
          hooks.ready?.forEach((cb) => cb());
        };
      }
      hooks.ready.push(fn);
      return this;
    },
    stop(fn: () => void) {
      if (!hooks.stop) {
        hooks.stop = [];
        options.stop = () => {
          hooks.stop?.forEach((cb) => cb());
        };
      }
      hooks.stop.push(fn);
      return this;
    },
    output() {
      return options;
    },
  };
  return api;
};
