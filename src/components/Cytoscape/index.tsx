import { createContext, PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { useCreation, useSize } from 'ahooks';
import { safeDrawImage } from './utils';
import cytoscape from '../../cytoscape';
import { Core, CytoscapeOptions } from 'cytoscape';
import { useBaseStyle } from './hooks/useBaseStyle';
import { useSchemaStyleLayer } from './hooks/useSchemaStyleLayer';

export const CytoscapeContext = createContext<Core[]>([]);

interface CytoscapeProviderProps extends CytoscapeOptions {
  cy?: Core;
}

export function CytoscapeProvider({
  children,
  cy,
  ...options
}: PropsWithChildren<CytoscapeProviderProps>) {
  const parentContext = useCytoscapes();

  
  const instance = useCreation(() => {
    if (cy) return cy;
    cy = cytoscape({ styleEnabled: true, ...options });
    return cy;
  }, []);

  useEffect(() => {
    // return () => instance.destroy();
  }, []);

  return (
    <CytoscapeContext.Provider value={[...parentContext, instance]}>
      {children}
    </CytoscapeContext.Provider>
  );
}

export const useCytoscape = () => {
  const values = useContext(CytoscapeContext);
  return values[values.length - 1];
};

export const useCytoscapes = () => {
  return useContext(CytoscapeContext);
};

export function CytoscapeRender() {
  const cy = useCytoscape();
  const containerRef = useRef<HTMLDivElement>(null);

  useBaseStyle(cy);
  useSchemaStyleLayer(cy);

  const size = useSize(containerRef);
  useEffect(() => {
    if (size) cy?.resize();
  }, [size]);

  useEffect(() => {
    cy.mount(containerRef.current!);
    return () => cy.unmount();
  }, [cy]);

  return <div className="h-full overflow-hidden" ref={containerRef} />;
}
