import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
// import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {

  test('its snapshot matches', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Check Heading', () => {
    render(<App />);
    const linkElement = screen.getByText(/Deck of Cards/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Check Button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Shuffle Deck/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Clicking Shuffle Deck fires handler', () => {
    // const {queryByLabelText, getByLabelText} = render(
    //   <App />,
    // );
    // expect(queryByLabelText(/off/i)).toBeTruthy();

    // fireEvent.click(getByLabelText(/off/i));
  
    // expect(queryByLabelText(/on/i)).toBeTruthy();
});

  test('Clicking Shuffle Deck fires handler', async() => {
    const mockFn = jest.fn();
    render(<App />);
    const button = screen.getByText(/Remove Cards/i);
    fireEvent.click(button);
    // expect(mockFn).toBeCalledTimes(1);

    // const linkElement = screen.getByText(/Removed Cards Deck/i);
    // expect(linkElement).toBeInTheDocument();
  });

});
