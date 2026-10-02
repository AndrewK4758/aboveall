import MuiTextField, { type TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import React from 'react';

import styles from './TextField.module.css';

export type TextFieldProps = MuiTextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({ className = '', ...props }) => {
  return (
    <MuiTextField
      variant='outlined'
      fullWidth
      className={`${styles.textFieldRoot} ${className}`.trim()}
      {...props}
    />
  );
};
