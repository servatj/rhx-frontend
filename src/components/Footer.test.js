import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders Footer component', () => {
  render(<Footer />);
  
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  // expect(screen.getByText('Footer')).toBeInTheDocument();


});
