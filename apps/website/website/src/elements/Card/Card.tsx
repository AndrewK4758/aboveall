import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card';
import React from 'react';

import styles from './Card.module.css';

export interface CardProps extends MuiCardProps {
  hoverLift?: boolean;
  glass?: boolean;
  accentBorderTop?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverLift = true,
  glass = false,
  accentBorderTop = false,
  className = '',
  ...props
}) => {
  const classes = [
    styles.cardRoot,
    hoverLift ? styles.hoverLift : '',
    glass ? styles.glass : '',
    accentBorderTop ? styles.accentBorderTop : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MuiCard {...props} className={classes}>
      {children}
    </MuiCard>
  );
};
