import React from 'react';
import classes from './half.module.scss';

interface SemiCircleChartProps {
  total: number;
  value: number;
  radius?: number;
  stroke?: number;
  bg?: string;
  color?: string;
}

const SemiCircleChart: React.FC<SemiCircleChartProps> = (props) => {
  const { total, value, radius, stroke, bg, color } = props;
  const percent = Math.round((value / total) * 100);
  const deg = `${percent * 1.8}deg`;

  return (
    <>
      <div
        className={classes.wrapper}
        style={
          {
            '--radius': `calc(var(--root) * ${radius})`,
            '--stroke': `calc(var(--root) * ${stroke})`,
            '--bg': bg,
          } as React.CSSProperties
        }
      >
        <div className={classes.chart}>
          <div className={classes.outer} style={{ '--color': color } as React.CSSProperties}>
            <div className={classes.value} style={{ '--deg': deg } as React.CSSProperties}></div>
          </div>

          <span className={classes.semilabel}>
            {percent}
            <small>%</small>
          </span>
        </div>
      </div>
    </>
  );
};

export { SemiCircleChart };
