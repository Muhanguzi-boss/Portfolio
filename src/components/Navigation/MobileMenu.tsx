import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationLinks } from './NavigationLinks';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm">
          <div className="px-4 py-6 space-y-4">
            <NavigationLinks onClick={toggleMenu} className="flex flex-col space-y-4" />
          </div>
        </div>
      )}
    </div>
  );
}