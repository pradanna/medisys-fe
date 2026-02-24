import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FormLableProps {
  text?: string;
  className?: string;
}

const FormLabel: React.FC<FormLableProps> = ({
  text = 'Form Label',
  className,
}) => {
  return (
    <span className={twMerge('block text-neutral-700 text-sm', className)}>
      {text}
    </span>
  );
};

export default FormLabel;
