import React, { useState } from 'react';
import classes from './radiochk.module.scss';

interface RadiogroupProps {
  id?: string;
  name?: string;
  select?: boolean | string;
  items: Array<RadioItems>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  isDisable?: boolean;
}
interface RadioItems {
  label?: string;
  value?: any;
}

const Radiogroup: React.FC<RadiogroupProps> = (props) => {
  const { id, items, select, name, isDisable, onChange, onBlur, ...other } = props;

  const [radioVal, setRadioVal] = useState(items[0].value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event); // 부모 컴포넌트에서 전달된 onChange 이벤트 호출
    } else {
      const selectedValue = event.target.value;
      setRadioVal(selectedValue);
      console.log(selectedValue);
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event); // 부모 컴포넌트에서 전달된 onBlur 이벤트 호출
    }
  };

  return (
    <div className={classes.radio}>
      {items.map((item) => {
        return (
          <label className={classes.label}>
            <input
              key={item.label}
              id={id}
              type="radio"
              name={name}
              value={item.value}
              checked={
                typeof select === 'boolean' ? select === item.value.toString() : radioVal === item.value.toString()
              }
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              disabled={isDisable}
              {...other}
            />
            {item.label && <span>{item.label}</span>}
          </label>
        );
      })}
    </div>
  );
};

export { Radiogroup };
