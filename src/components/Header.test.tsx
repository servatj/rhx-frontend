import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; 
import Header from './Header'; 

describe("Footer test", () => {
    test("Should show Header Properly", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      expect(screen.getByText('RHX')).toBeInTheDocument();
      const linkElement = screen.getByRole('link');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '/');
    }) 
})
