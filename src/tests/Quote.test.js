import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
