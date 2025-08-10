import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from "../landing_page/home/Hero";
import '@testing-library/jest-dom/extend-expect';

describe('Hero component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(/hero image/i); // case-insensitive
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
});
