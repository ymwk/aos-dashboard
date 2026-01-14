import React from 'react';
import classes from './bar.module.scss';

interface BarChartProps {
  total: number;
  value: number;
  label?: any;
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const { total, value, label } = props;
  const percent = Math.round((value / total) * 100);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.barWrap}>
          <div className={classes.bar} style={{ height: percent + '%' }}>
            <span className={classes.value}>{percent}%</span>
          </div>
        </div>

        <div className={classes.label}>
          <span className={classes.txt}>{label}</span>
          <span className={classes.num}>
            {value} / <small>{total}</small>
          </span>
        </div>
      </div>
    </>
  );
};

export { BarChart };
