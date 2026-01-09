import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  const comboboxRef = useRef<HTMLDivElement>(null);

  const handleOnChangeSelectValue = (e: React.ChangeEvent<any>) => {
    setCurrentValue(e.target.innerText);
    setShowOptions(false);
  };

  const handleOnChangeShowState = () => {
    setShowOptions((prev) => !prev);
  };

  // 바깥영역 클릭하면 닫기
  const handleSelect = useCallback((e: MouseEvent) => {
    if (!e.target || !comboboxRef.current?.contains(e.target as HTMLElement)) {
      setShowOptions(false);
    }
  }, []); // 빈 배열로 타이밍 고정

  useEffect(() => {
    document.addEventListener('click', handleSelect);
    return () => document.removeEventListener('click', handleSelect);
  }, [handleSelect]); // handleSelect만 의존

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
