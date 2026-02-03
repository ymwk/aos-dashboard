import React from 'react';
import classes from './horizon.module.scss';

interface HorizonChartProps {
  total: number;
  value: number;
  color?: string;
  label?: string;
}

const HorizonChart: React.FC<HorizonChartProps> = (props) => {
  const { total, value, color, label } = props;
  const percent = Math.round((value / total) * 100);

  return (
    <>
      <div className={classes.wrapper}>
        {label && <span className={classes.label}>{label}</span>}

        <div className={classes.barWrap} style={{ '--color': color } as React.CSSProperties}>
          <div className={classes.bar} style={{ width: percent + '%' }} />
          <span className={classes.value}>
            {value}/{total}
          </span>
        </div>
      </div>
    </>
  );
};

export { HorizonChart };
