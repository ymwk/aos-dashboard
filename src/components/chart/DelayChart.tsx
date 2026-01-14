import React from 'react';
import classes from './delay.module.scss';

interface DelayChartProps {
  total: number;
  value: number;
  color?: 'c1' | 'c2' | 'c3';
  label?: string;
}

const DelayChart: React.FC<DelayChartProps> = (props) => {
  const { total, value, color = 'c1', label } = props;
  const percent = value / total;

  return (
    <>
      <div className={`${classes.progress} ${color ? classes[color] : ''}`}>
        <div className={classes.legend}>{label && <span className={classes.label}>{label}</span>}</div>
        <div className={classes.barWrap}>
          <div className={classes.bar} style={{ width: 'calc(20% + (80% * ' + percent + '))' }}>
            {' '}
            {/* 값이 0일 경우에도 최소 20%의 넓이를 갖도록 */}
            <div className={classes.icon}>
              <span className={classes.value}>{value}편</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
                <path
                  fillRule="evenodd"
                  d="m14.235 3.56 4.172-2.34c1.403-.796 2.155.352 1.09 1.267l-3.859 3.181-.038 3.068.819.076c.567.047.535.593.272.729l-1.325.805-.02 2.273.879-.085c.276-.038.747.322.312.728l-1.365 1.073v2.57c.042.138-.67.83-1.031 1.052-.183.11-.43-.008-.473-.177l-2.231-8.314c-.136-.447-.513-.507-.982-.23l-4.835 2.76-.194 3.528c-.018.51-1.379.955-1.646.529l-1.004-3.135-2.72-2.24c-.297-.26.667-1.352 1.089-1.177l3.58 1.003L9.17 7.015c.39-.337.27-.68-.08-.95L2.108 1.03a.312.312 0 0 1 0-.498c.306-.217.88-.665 1.466-.494L5.85.916 7.175.187c.574-.406 1.018.18.897.345l-.468.805 1.988.805 1.13-.842c.49-.307 1.018.226.898.46l-.39.692 3.002 1.112z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DelayChart };
