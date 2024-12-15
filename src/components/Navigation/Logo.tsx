import React from 'react';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <a href="#home" className="flex items-center space-x-2">
      <Code2 className="h-8 w-8 text-white" />
      <span className="text-white font-bold text-xl">MB</span>
    </a>
  );
}