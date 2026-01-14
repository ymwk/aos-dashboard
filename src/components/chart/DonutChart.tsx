import React, { useRef, useEffect } from 'react';
import classes from './donut.module.scss';

interface DonutChartProps {
  total: number;
  value: number;
  unit?: string;
  dataview?: boolean;
  type?: 'departure' | 'arrival';
}

const DonutChart: React.FC<DonutChartProps> = (props) => {
  const { total, value, unit, dataview = false, type } = props;
  const percent = Math.round((value / total) * 100);
  const progressRef = useRef<SVGCircleElement | null>(null);
  const circumference = 2 * Math.PI * 40;

  useEffect(() => {
    if (progressRef.current) {
      const offset = circumference * (1 - percent / 100);
      progressRef.current.style.strokeDashoffset = offset.toFixed(2);
    }
  }, [percent, circumference]);

  return (
    <>
      <div className={`${classes.wrapper} ${type ? classes[type] : ''}`}>
        <div className={classes.chart}>
          <svg className={classes.donut} viewBox={`0 0 100 100`}>
            <circle className={classes.bg} cx="50" cy="50" r="40" />
            <circle
              ref={progressRef}
              className={classes.progress}
              cx="50"
              cy="50"
              r="40"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={circumference}
            />
          </svg>
        </div>

        <div className={classes.data}>
          <span className={classes.value}>
            <em>{percent}</em>
            {unit && <span>{unit}</span>}
          </span>
          {dataview && (
            <small>
              ({value}/{total})
            </small>
          )}
        </div>
      </div>
    </>
  );
};

export { DonutChart };
