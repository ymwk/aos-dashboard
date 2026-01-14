import React from 'react';
import classes from './bitbar.module.scss';

interface BitBarChartProps {
  exp: number; //예상시간
  added: number; //추가시간
  color?: 'c1' | 'c2' | 'c3';
  label?: string;
}

const BitBarChart: React.FC<BitBarChartProps> = (props) => {
  const { exp, added, color = 'c1', label } = props;
  const percent = Math.round((added / (exp + added)) * 100);

  return (
    <>
      <div className={`${classes.progress} ${color ? classes[color] : ''}`}>
        <div className={classes.legend}>
          {label && (
            <span className={classes.label}>
              {label}({exp}분)
            </span>
          )}
          <span className={classes.value}>+{added}분</span>
        </div>
        <div className={classes.barWrap}>
          <div className={classes.bar} style={{ width: percent + '%' }} />
        </div>
      </div>
    </>
  );
};

export { BitBarChart };
