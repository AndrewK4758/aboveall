import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect, {
  type SelectChangeEvent,
  type SelectProps as MuiSelectProps,
} from '@mui/material/Select';
import React from 'react';

import styles from './Select.module.css';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  label: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  className = '',
  name,
  required,
  ...props
}) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (onChange) {
      onChange(event.target.value as string);
    }
  };

  const id = `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <FormControl
      fullWidth
      required={required}
      className={`${styles.selectRoot} ${className}`.trim()}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
        {...props}
      >
        {options.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
