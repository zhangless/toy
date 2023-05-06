import React from "react";

export type Style = any;

export interface ICanvas {
  title: string;
  style: Style;
  cmps: Array<ICmpWithKey>;
}

export interface ICmp {
  type: number;
  style: Style;
  value: string;
  onClick?: string;
}

export interface ICmpWithKey extends ICmp {
  key: number;
}

export type EditStoreState = {
  canvas: ICanvas;
  assembly: Set<number>;
};

export type AddCmpFC = (_cmp: ICmp) => void;

export type EditStoreAction = {
  // addCmp: AddCmpFC;
};

export interface IEditStore extends EditStoreState, EditStoreAction {}
