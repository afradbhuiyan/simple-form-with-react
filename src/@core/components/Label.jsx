import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Label({
  htmlFor,
  children,
  text,
  className,
  required,
  ...reset
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        'text-sm inline-flex items-center text-gray-600 mb-1',
        className
      )}
      {...reset}>
      {children || text}
      {required && <span className="text-danger-500 ml-1">*</span>}
    </label>
  );
}
