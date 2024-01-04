import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UncontrolledWithref from './UncontrolledWithref';

describe('<UncontrolledWithref />', () => {
  test('it should mount', () => {
    render(<UncontrolledWithref />);
    
    const uncontrolledWithref = screen.getByTestId('UncontrolledWithref');

    expect(uncontrolledWithref).toBeInTheDocument();
  });
});