import { useCreation } from 'ahooks';
import { useCytoscape } from '..';

export function useOneMount(callback) {
  const cy = useCytoscape();

  useCreation(() => {
    if (cy.container() === null) callback(cy);
    else cy.one('mount', () => callback(cy));
  }, []);
}
