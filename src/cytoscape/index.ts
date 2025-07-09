import fcose from 'cytoscape-fcose';
import style from './extensions/style-layers';
import cytoscape, { Core } from 'cytoscape';

const hooks: any[] = [];

export const onready = (callback: (cy: Core) => void) => {
  hooks.push(callback);
};

cytoscape.use(fcose);
// style-layers
cytoscape.use(style);

function create(options: any) {
  const callbacks = [...hooks];
  if (typeof options.ready === 'function') {
    callbacks.push(options.ready);
  }
  return cytoscape({
    ...options,
    ready: function () {
      callbacks.forEach((hook) => hook(this));
    },
  });
}

export default create;