import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import Footer from './Footer'; 

describe("Footer test", () => {
    test("Should show Footer Properly", () => {
      render(<Footer />);

      expect(screen.getByText('RHX')).toBeInTheDocument();
      expect(screen.getByText('© 2023 All rights reserved.')).toBeInTheDocument();
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
      expect(screen.getByText('Terms of Service')).toBeInTheDocument();
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    })
})
