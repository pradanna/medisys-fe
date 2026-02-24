import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ValidatorLabelProps {
  text?: string;
  className?: string;
}

const ValidatorLabel: React.FC<ValidatorLabelProps> = ({
  text = 'validation error',
  className,
}) => {
  return (
    <span className={twMerge('block text-red-500 text-xs', className)}>
      {text}
    </span>
  );
};

export default ValidatorLabel;
