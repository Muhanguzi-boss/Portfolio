import React, { useState } from 'react';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { MobileMenu } from './MobileMenu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationLinks className="flex space-x-8" />
          </div>

          {/* Mobile Navigation */}
          <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}