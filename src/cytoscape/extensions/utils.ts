import type { Core, Style } from 'cytoscape';
import cytoscape from 'cytoscape';

// styleEnabled: true开启样式，构造器中会创建Style实例，从而可以overrideStyleFunction
export const cy = cytoscape({ styleEnabled: true });

// Get scratch pad reserved for this extension on the given element or the core if 'name' parameter is not set,
// if the 'name' parameter is set then return the related property in the scratch instead of the whole scratchpad
export function getScratch(namespace: string, eleOrCy: any, name?: string) {
  if (eleOrCy.scratch(namespace) === undefined) {
    eleOrCy.scratch(namespace, {});
  }
  const scratchPad = eleOrCy.scratch(namespace);
  return name === undefined ? scratchPad : scratchPad[name];
}

// Set the a field (described by 'name' parameter) of scratchPad (that is reserved for this extension
// on an element or the core) to the given value (by 'val' parameter)
export function setScratch(namespace: string, eleOrCy: any, name: string, val: any) {
  const scratchPad = getScratch(namespace, eleOrCy);
  scratchPad[name] = val;
  eleOrCy.scratch(namespace, scratchPad);
}

// HACK: 通过重写覆盖的方式扩展cytoscape中Core原型函数
export function overrideCoreFunction(
  property: string,
  newFn: (srcFn: (...args: any[]) => any) => (this: Core, ...args: any) => void,
) {
  const corePrototype = Object.getPrototypeOf(cy);
  const srcFn = corePrototype[property];
  corePrototype[property] = newFn(srcFn);
}

// HACK: 通过重写覆盖的方式扩展cytoscape中Collection原型函数
export function overrideCollectionFunction(
  property: string,
  newFn: (srcFn: (...args: any[]) => any) => (...args: any) => void,
) {
  const corePrototype = Object.getPrototypeOf(cy.collection([]));
  const srcFn = corePrototype[property];
  corePrototype[property] = newFn(srcFn);
}

// HACK: 通过重写覆盖的方式扩展cytoscape中Style原型函数
export function overrideStyleFunction(
  property: string,
  newFn: (srcFn: (...args: any[]) => any) => (this: Style, ...args: any) => void,
) {
  const stylePrototype = Object.getPrototypeOf(cy.style());
  const srcFn = stylePrototype[property];
  stylePrototype[property] = newFn(srcFn);
}

// 创建单例模型的插件实例
export function createSingleInstance(name: string, create: (cy: Core) => any) {
  return function (this: any) {
    if (!this._private[name]) {
      this._private[name] = create(this);
    }
    const instance = this._private[name];
    return instance;
  };
}

export function registerStyleProperty(property: {
  name: string;
  groupKey: string;
  alias?: string;
  type: string;
}) {
  const { name, groupKey, alias, type } = property;
  const stylePrototype = Object.getPrototypeOf(cy.style());
  const {
    properties,
    propertyGroups,
    propertyGroupNames,
    propertyGroupKeys,
    propertyNames,
    types,
  } = stylePrototype;

  if (!propertyGroups[groupKey]) {
    propertyGroups[groupKey] = [];
    propertyGroupKeys.push(groupKey);
    propertyGroupNames[groupKey] = [];
  }

  const metaProperty = { name, type: types[type], groupKey };
  propertyGroups[groupKey].push(metaProperty);
  propertyGroupNames[groupKey].push(name);

  properties.push(metaProperty);
  properties[name] = metaProperty;
  propertyNames.push(name);

  if (alias) {
    const aliasProp = { name: alias, alias: true, pointsTo: name };
    properties.push(aliasProp);
    properties[alias] = aliasProp;
  }
}

export function waitForInput(code) {
  return new Promise((resolve) => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === code) {
        debugger;
        resolve(void 0);
        window.removeEventListener('keydown', listener);
      }
    };
    window.addEventListener('keydown', listener);
  });
}
