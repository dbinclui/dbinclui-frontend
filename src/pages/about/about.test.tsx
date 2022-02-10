import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './index';
import '@testing-library/jest-dom/extend-expect';

test('deve existir um parágrafo no Sobre', () => {
  render(<About />);

  const AboutDescription = screen.getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed gravida nibh, ullamcorper rhoncus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc elit, vehicula eget dolor nec, euismod dignissim libero.',
  );
  expect(AboutDescription).toBeInTheDocument();
});
