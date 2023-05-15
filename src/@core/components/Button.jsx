import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({ type = 'button', className, children }) {
  return (
    <button
      type={type}
      className={twMerge(
        'px-4 py-2 rounded text-sm bg-primary-500 text-white',
        className
      )}>
      {children}
    </button>
  );
}
