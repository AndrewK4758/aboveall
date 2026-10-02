import MuiChip, { type ChipProps as MuiChipProps } from '@mui/material/Chip';
import React from 'react';

import styles from './Badge.module.css';

export interface BadgeProps extends Omit<MuiChipProps, 'color'> {
  customTone?: 'emergency' | 'certified' | 'cyan' | 'orange';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  customTone = 'cyan',
  className = '',
  ...props
}) => {
  const toneClass =
    customTone === 'emergency'
      ? styles.variantEmergency
      : customTone === 'certified'
        ? styles.variantCertified
        : customTone === 'orange'
          ? styles.variantOrange
          : styles.variantCyan;

  return (
    <MuiChip
      size='small'
      label={label}
      className={`${styles.chipRoot} ${toneClass} ${className}`.trim()}
      {...props}
    />
  );
};
