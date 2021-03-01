import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
test("renders greeting on Greeting component", async () => {
  // Arrange
  const { getByText } = render(<Greeting />);
  // Act
  const greeting = getByText(/hello lambdalorians!/i);
  // Assert
  expect(greeting).toBeInTheDocument();
});

*/
