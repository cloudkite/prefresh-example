import React from 'react'

export const hostDocument: Document = window.parent.document;
// @ts-expect-error
export const embedFrame: HTMLIFrameElement = window.frameElement;

export function removeNode(node: Node | null) {
    if (node != null && node.parentNode != null) {
      node.parentNode.removeChild(node);
    }
}
