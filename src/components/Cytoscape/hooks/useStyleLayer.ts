import { StyleRule } from '@/cytoscape/extensions/style-layers';
import { useCytoscape } from '../index';
import { useEffect } from 'react';

export function useStyleLayer(name: string, initialStyle: StyleRule[] = [], deps: any[] = []) {
  const cy = useCytoscape();

  useEffect(() => {
    console.log('style layer', name, initialStyle);
    cy.style().layer(name, initialStyle);
  }, deps);
}
