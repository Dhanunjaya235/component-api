import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Apis from './Apis';

describe('<Apis />', () => {
  test('it should mount', () => {
    render(<Apis />);
    
    const apis = screen.getByTestId('Apis');

    expect(apis).toBeInTheDocument();
  });
});