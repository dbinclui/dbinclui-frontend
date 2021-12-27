import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Componente do Footer', () => {
  test('deve existir um footer na página', () => {
    expect(Footer).toBeTruthy();
  });

