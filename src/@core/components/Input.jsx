import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Input({ type = 'text', className, ...reset }) {
  return (
    <input
      type={type}
      className={twMerge(
        'w-full border border-gray-200 px-4 py-2 text-sm text-gray-700 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500 focus:outline-none',
        className
      )}
      {...reset}
    />
  );
}
