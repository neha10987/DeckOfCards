import { render } from '@testing-library/react';
import React = require('react');
import App from './App';

describe('<App /> component', () => {
  it('App renders successfully', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
