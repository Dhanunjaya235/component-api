import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorCatch from './ErrorCatch';

describe('<ErrorCatch />', () => {
  test('it should mount', () => {
    render(<ErrorCatch />);
    
    const errorCatch = screen.getByTestId('ErrorCatch');

    expect(errorCatch).toBeInTheDocument();
  });
});