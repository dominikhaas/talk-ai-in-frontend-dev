import { render, screen } from '@testing-library/react';
import {it,  expect} from 'vitest'
import {Button} from './Button';
import '@testing-library/jest-dom';

it('renders the button with the correct label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});