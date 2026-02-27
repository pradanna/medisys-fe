import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';
import { cardVariants } from './card.variants';

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shadow, size, withBorder, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ shadow, size, withBorder, interactive }),
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export default Card;
