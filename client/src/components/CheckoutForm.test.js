import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('Renders without errors', async () => {
  render(<CheckoutForm />);

  const fnameInput = screen.getByLabelText(/first name/i);
  const lnameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  userEvent.type(fnameInput, 'Test');
  userEvent.type(lnameInput, 'Testing');
  userEvent.type(addressInput, 'Some Street USA');
  userEvent.type(cityInput, 'Pueblo');
  userEvent.type(stateInput, 'CO');
  userEvent.type(zipInput, '81003');

  const button = screen.getByRole('button');
  userEvent.click(button);

  const newContact = await screen.getByText(/Test Testing/i);
  expect(newContact).toBeInTheDocument();
});
