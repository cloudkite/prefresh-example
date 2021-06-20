import React from 'react'

export const hostDocument: Document = window.parent.document;
// @ts-expect-error
export const embedFrame: HTMLIFrameElement = window.frameElement;

export function removeNode(node: Node | null) {
    if (node != null && node.parentNode != null) {
      node.parentNode.removeChild(node);
    }
  }
  
  export function findNode(
    parent: Node | null,
    fn: (node: Node) => boolean
  ): ChildNode | void {
    if (parent == null) return;
    for (let i = 0; i < parent.childNodes.length; i++) {
      const node = parent.childNodes[i];
      if (fn(node)) return node;
    }
  }
