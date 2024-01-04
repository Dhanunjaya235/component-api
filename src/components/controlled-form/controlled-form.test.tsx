import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlledForm from './ControlledForm';

describe('<ControlledForm />', () => {
  test('it should mount', () => {
    render(<ControlledForm />);
    
    const controlledForm = screen.getByTestId('ControlledForm');

    expect(controlledForm).toBeInTheDocument();
  });
});