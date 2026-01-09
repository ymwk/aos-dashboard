import React from 'react';
import classes from './progress.module.scss';

interface ProgressProps {
  total: number;
  value: number;
  type?: 'terminal'
}

const Progress: React.FC<ProgressProps> = (props) => {
  const { total, value, type } = props;
  const percentage = Math.round((value / total) * 100);

  return (
    <>
      <div className={`${classes.progress} ${type ? classes[type] : ''}`}>
        <span className={classes.value}>{percentage}%</span>
        <div className={classes.barWrap}>
          <div className={classes.bar} style={{ width: percentage + '%' }} />
        </div>
      </div>
    </>
  );
};

export { Progress };
