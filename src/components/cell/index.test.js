import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cell } from '.';

const renderCell = props => render(<Cell {...props} />);
const findButton = () => screen.getByRole('button');

describe('Cell', () => {
  test('renders a button', () => {
    const value = 'Hello';
    renderCell({ value });
    const button = findButton();

    expect(button).toBeInTheDocument();
    expect(button.textContent).toEqual(value);
    expect(button).not.toBeDisabled();
  });

  test('renders button as disabled', () => {
    renderCell({ isDisabled: true });
    const button = findButton();

    expect(button).toBeDisabled();
  });

  test('invokes callback function on click', () => {
    const handleClick = jest.fn();
    renderCell({ handleClick });
    const button = findButton();

    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
