import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Checkbox({ className, ...reset }) {
  return (
    <input
      type="checkbox"
      className={twMerge('w-4 h-4 ', className)}
      {...reset}
    />
  );
}
