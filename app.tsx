import React from 'react';
import { render } from 'react-dom';
import Wrapper from './Wrapper'
import { hostDocument, embedFrame } from './utils';

const container = hostDocument.createElement('div');
const { parentElement } = embedFrame;
if (parentElement) {
  parentElement.insertBefore(container, parentElement.firstChild);
}

if (container != null) {
  render(<Wrapper/>, container);
}
