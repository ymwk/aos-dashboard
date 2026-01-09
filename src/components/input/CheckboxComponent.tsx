import React from 'react';
import classes from './radiochk.module.scss';

interface CheckboxProps {
  name?: string
  label?: string
  disabled?: boolean
  required?: boolean
  checked?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked, name, label, disabled, required, onChange } = props;
  return (
    <>
      <label className={classes.checkbox}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
        {label && <span className={classes.label}>{label}</span>}
      </label>
    </>
  );
}

export {Checkbox};