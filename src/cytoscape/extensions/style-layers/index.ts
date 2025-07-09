/* eslint-disable @typescript-eslint/no-shadow */
import { StylesheetCSS, StylesheetStyle } from 'cytoscape';
import { overrideStyleFunction } from '../utils';
import { onready } from '../../index';

export type StyleRule = StylesheetStyle | StylesheetCSS;
export type Layer = {
  name: string;
  rules: StyleRule[];
};

export function registerStyleLayer(name: string, initialStyle: StyleRule[] = []) {
  onready((cy: any) => {
    if (!cy.styleEnabled()) return;
    cy.style().layer(name, initialStyle);
  });
}

export default function () {
  // 兼容UI组件
  overrideStyleFunction('layer', () => {
    return function (name: string, rules: StyleRule[]) {
      if (!this._private.layers) this._private.layers = [];
      const layers = this._private.layers;
      const index = layers.findIndex((layer) => layer.name === name);
      if (index >= 0) layers[index].rules = rules;
      else layers.push({ name, rules });
      // 更新
      this.resetToDefault();
      layers.forEach((layer) => this.appendFromJson(layer.rules));
      return this;
    };
  });
}

declare module 'cytoscape' {
  interface StylePrivate {
    layers: Layer[];
  }
  interface Style {
    _private: StylePrivate;
    layer: (name: string, rules: StyleRule[]) => void;
    appendFromJson: (json: StyleRule[]) => void;
  }
}
