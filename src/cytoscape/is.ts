import { isFunction } from 'lodash';

let instanceStr = function (obj: any) {
  return obj && obj.instanceString && isFunction(obj.instanceString) ? obj.instanceString() : null;
};

export const element = (obj: any) => instanceStr(obj) === 'collection' && obj._private.single;

export const collection = (obj: any) => instanceStr(obj) === 'collection' && !obj._private.single;
