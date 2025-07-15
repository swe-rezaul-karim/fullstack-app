import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('Hello from React');
});