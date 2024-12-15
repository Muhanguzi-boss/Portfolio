import React from 'react';

interface NavigationLinksProps {
  onClick?: () => void;
  className?: string;
}

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export function NavigationLinks({ onClick, className = '' }: NavigationLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}