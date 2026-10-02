import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import React from 'react';

import styles from './Button.module.css';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  customVariant?: 'primary-orange' | 'primary-navy' | 'outline' | 'ghost';
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  customVariant = 'primary-orange',
  glow = false,
  className = '',
  ...props
}) => {
  const variantClass =
    customVariant === 'primary-orange'
      ? styles.variantOrange
      : customVariant === 'primary-navy'
        ? styles.variantNavy
        : customVariant === 'outline'
          ? styles.variantOutline
          : '';

  const glowClass = glow ? styles.glow : '';

  return (
    <MuiButton
      {...props}
      className={`${styles.buttonRoot} ${variantClass} ${glowClass} ${className}`.trim()}
    >
      {children}
    </MuiButton>
  );
};
