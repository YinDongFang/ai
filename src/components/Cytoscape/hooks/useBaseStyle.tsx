import { useStyleLayer } from './useStyleLayer';

const pixelRatio = 1;
const EDGE_COLOR = 'rgb(156, 156, 156)';
const GROUP_COLOR = '#555555';
const GROUP_NODE_COLOR = 'rgb(64, 184, 191)';

const OVERLAY_COLOR = '#0088cc';
const OVERLAY_OPACITY = 0.4;
const OVERLAY_NODE_PADDING = 10 * pixelRatio;

const getPropertyValue = (ele: any, key: string, defaultValue: any) => {
  let value = defaultValue;

  if (ele && ele._private && ele._private.data && ele._private.data[key]) {
    value = ele._private.data[key];
  }
  return value || '';
};

export function useBaseStyle(cy) {
  useStyleLayer('base', [
    {
      selector: 'node',
      style: {
        'font-size': '12px',
        'text-wrap': 'ellipsis',
        'text-valign': 'bottom',
        'text-max-width': '80px',
        'background-width': '60%',
        'background-height': '60%',
        label: (ele: any) => getPropertyValue(ele, 'title', '-'),
        color: (ele: any) => getPropertyValue(ele, 'color', EDGE_COLOR),
        'background-image': (ele: any) => getPropertyValue(ele, 'icon', 'question-circle'),
        'background-color': (ele: any) => getPropertyValue(ele, 'bcolor', EDGE_COLOR),
        'text-outline-width': 2,
        'text-margin-y': 4,
        'text-outline-color': '#fff',
      },
    },
    {
      selector: 'node:selected',
      css: {
        opacity: 1,
        'background-image-opacity': 1,
        'overlay-color': OVERLAY_COLOR,
        'overlay-opacity': OVERLAY_OPACITY,
        'overlay-padding': OVERLAY_NODE_PADDING,
        'border-opacity': 1,
      },
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'source-arrow-shape': 'none',
        'line-dash-pattern': [8, 4],
        'target-arrow-shape': (ele: any) => getPropertyValue(ele, 'arrow', 'triangle'),
        width: 1,
        'font-size': '10px',
        label: (ele: any) => getPropertyValue(ele, 'title', '-'),
        color: (ele: any) => getPropertyValue(ele, 'color', EDGE_COLOR),
        'line-color': (ele: any) => getPropertyValue(ele, 'color', EDGE_COLOR),
        'text-background-color': 'green', // (ele: any) => getPropertyValue(ele, 'color', EDGE_COLOR),
        'text-rotation': 'autorotate',
        'text-outline-width': 2,
        'text-outline-color': '#fff',
        'text-wrap': 'wrap',
        'line-height': 1.5,
      },
    },
    {
      selector: 'edge.cy-expand-collapse-collapsed-edge',
      style: {
        'text-outline-color': '#ffffff',
        'text-outline-width': '2px',
        label: (ele: any) => {
          const { collapsedEdges = [] } = ele.data();
          return `(${collapsedEdges.length})`;
        },
        'line-style': 'dashed',
        width: 4,
        'font-size': '12px',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'none',
        color: GROUP_NODE_COLOR,
        'line-color': GROUP_NODE_COLOR,
        'target-arrow-color': GROUP_NODE_COLOR,
        'source-arrow-color': GROUP_NODE_COLOR,
      },
    },
    {
      selector: 'edge:selected',
      css: {
        opacity: 1,
        'background-image-opacity': 1,
        'overlay-color': OVERLAY_COLOR,
        'overlay-opacity': OVERLAY_OPACITY,
        'overlay-padding': OVERLAY_NODE_PADDING,
      },
    },
    {
      selector: ':parent',
      style: {
        shape: 'round-rectangle',
        'border-width': 2,
        'font-size': '14px',
        'text-margin-y': 10,
        'text-valign': 'bottom',
        'background-image': 'none',
        'background-opacity': 0.333,
        'border-color': GROUP_COLOR,
        color: GROUP_COLOR,
        'overlay-color': 'transparent',
        'background-color': '#ffffff',
        'overlay-opacity': 0,
        'overlay-padding': 0,
        'font-weight': 'bold',
      },
    },
    {
      selector: ':parent:selected',
      style: {
        color: '#ffffff',
        'border-style': 'solid',
        'border-width': 4,
        'font-size': '16px',
        'text-outline-width': 0,
        'text-background-opacity': 1,
        'text-background-padding': '1px',
        'text-outline-color': '#ffffff',
        'background-color': EDGE_COLOR,
        'border-color': (ele: any) => getPropertyValue(ele, 'color', GROUP_COLOR),
        'text-background-color': (ele: any) => getPropertyValue(ele, 'color', GROUP_COLOR),
      },
    },
  ]);
}
