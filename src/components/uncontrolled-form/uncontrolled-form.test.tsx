import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UncontrolledForm from './UncontrolledForm';

describe('<UncontrolledForm />', () => {
  test('it should mount', () => {
    render(<UncontrolledForm />);
    
    const uncontrolledForm = screen.getByTestId('UncontrolledForm');

    expect(uncontrolledForm).toBeInTheDocument();
  });
});