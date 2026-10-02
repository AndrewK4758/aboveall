import MuiTypography, {
  type TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import React from 'react';

import styles from './Typography.module.css';

export interface HeadingProps extends MuiTypographyProps {
  gradient?: 'blue' | 'orange' | 'none';
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  gradient = 'none',
  className = '',
  ...props
}) => {
  const gradientClass =
    gradient === 'blue' ? styles.headingGradient : gradient === 'orange' ? styles.headingWarm : '';

  return (
    <MuiTypography {...props} className={`${gradientClass} ${className}`.trim()}>
      {children}
    </MuiTypography>
  );
};

export const Text: React.FC<MuiTypographyProps> = ({ children, className = '', ...props }) => {
  return (
    <MuiTypography {...props} className={className}>
      {children}
    </MuiTypography>
  );
};
