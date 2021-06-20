import React from 'react';
import { createPortal } from 'react-dom';

import { hostDocument, embedFrame, removeNode, findNode } from './utils';

const getFrameHtml = () => `
<!doctype html>
<html>
<head>
  <base target="_parent">
</head>
<body>
  <div id="root"></div>
</body>
</html>`;

type FrameProps = {
  title?: string;
};

function createFrame({ title }: FrameProps) {
  const frame = hostDocument.createElement('iframe');
  frame.setAttribute('scrolling', 'no');
  frame.setAttribute('allowFullScreen', '');
  if (title) frame.setAttribute('title', title);
  const { parentElement } = embedFrame;
  if (parentElement) {
    const divider =
      findNode(parentElement, (node) => node.nodeType === 8) ??
      parentElement.firstChild;
    if (divider) parentElement.insertBefore(frame, divider);
  }
  const doc = frame.contentDocument;
  if (doc) {
    doc.open('text/html', 'replace');
    doc.write(getFrameHtml());
    doc.close();
  }
  return frame;
}

type Props = FrameProps & {
  children: React.ReactNode;
  className?: string;
};

export default class Frame extends React.Component<Props> {
  frame: HTMLIFrameElement = createFrame(this.props);

  updateAttributes() {
    this.frame.setAttribute('class', this.props.className ?? '');
  }

  componentDidMount() {
    this.updateAttributes();
  }

  componentDidUpdate() {
    this.updateAttributes();
  }

  componentWillUnmount() {
    removeNode(this.frame);
  }

  render() {
    const { children } = this.props;
    const container = this.frame.contentDocument?.getElementById('root');
    if (!container) return null;
    return createPortal(children, container);
  }
}
