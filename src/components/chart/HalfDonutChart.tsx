import React from 'react';
import classes from './half.module.scss';

interface HalfDonutChartProps {
  total: number;
  value: number;
  total2: number;
  value2: number;
  label?: string
}

const HalfDonutChart: React.FC<HalfDonutChartProps> = (props) => {
  const { total, value, total2, value2, label } = props;
  const percent = Math.round((value / total) * 100);
  const deg = `${percent * 1.8}deg`;
  const percent2 = Math.round((value2 / total2) * 100);
  const deg2 = `${percent2 * 1.8}deg`;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.chart}>
          <div className={classes.outer}>
            <div className={classes.value} style={{ '--deg': deg } as React.CSSProperties}></div>
          </div>
          <div className={classes.inner}>
            <div className={classes.value} style={{ '--deg': deg2 } as React.CSSProperties}></div>
          </div>
          {label && <span className={classes.label}>{label}</span>}
        </div>

        <div className={classes.legend}>
          <div className={classes.item}>
            <i className="ic-comm i--t1-bg"></i>
            <span className={classes.num}>
              <em>{percent}</em>%
            </span>
          </div>
          <div className={classes.item}>
            <i className="ic-comm i--t2-bg"></i>
            <span className={classes.num}>
              <em>{percent2}</em>%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { HalfDonutChart };
