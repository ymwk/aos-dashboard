import React from 'react';
import classes from './progress.module.scss';

interface ProgressChartProps {
  total: number;
  value: number;
  type?: 'terminal' | 'airside' | undefined;
}

const ProgressChart: React.FC<ProgressChartProps> = (props) => {
  const { total, value, type } = props;
  const percent = Math.round((value / total) * 100);

  return (
    <>
      <div className={`${classes.progress} ${type ? classes[type] : ''}`}>
        <span className={classes.value}>
          {type == 'airside' ? percent+'%('+total+')' : percent+'%'}
        </span>
        <div className={classes.barWrap}>
          <div className={classes.bar} style={{ width: percent + '%' }} />
        </div>
      </div>
    </>
  );
};

export { ProgressChart };
