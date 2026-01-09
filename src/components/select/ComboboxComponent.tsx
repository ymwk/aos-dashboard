import React, { useState, useEffect, useRef } from 'react';
import classes from './combobox.module.scss';

interface ComboboxProps {
  disabled?: boolean;
  options: Array<SelectOptions>;
  width?: any;
  height?: any;
}

interface SelectOptions {
  value?: React.ReactNode;
}

const Combobox: React.FC<ComboboxProps> = (props) => {
  const { disabled, options, width, height } = props;

  const [currentValue, setCurrentValue] = useState(options[0].value);
  const [showOptions, setShowOptions] = useState(false);

  const comboboxRef = useRef(null);

  const handleOnChangeSelectValue = (e: React.ChangeEvent<any>) => {
    setCurrentValue(e.target.innerText);
    setShowOptions(false);
  };

  const handleOnChangeShowState = () => {
    setShowOptions((prev) => !prev);
  };

  // 바깥영역 클릭하면 닫기
  useEffect(() => {
    const handleSelect = (e: MouseEvent) => {
      if (!e.target) return;

      // TODO: contains error (comboboxRef 값이 null 이어서 생기는 오류)
      if (!comboboxRef.current?.contains(e.target as HTMLElement)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleSelect);
    return () => document.removeEventListener('click', handleSelect);
  }, [comboboxRef]);

  return (
    <>
      <div className={classes.combobox} style={width && { width: width }} ref={comboboxRef}>
        <button
          type="button"
          className={`${classes.btn}`}
          disabled={disabled}
          onClick={handleOnChangeShowState}
          style={height && { height: height }}
        >
          {currentValue}
        </button>

        <ul className={`${classes.dropdown} ${showOptions ? classes.show : ''}`}>
          {options.map((item, idx) => {
            return (
              <li className={classes.option} key={idx}>
                <button type="button" className={`${classes.optionBtn} `} onClick={handleOnChangeSelectValue}>
                  {item.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { Combobox };
