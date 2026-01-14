import React from 'react';
import classes from './multibar.module.scss';

interface BarMultiChartProps {
  total: number;
  dataAry: Array<DataItems>;
}

interface DataItems {  
  value: number;
  label: any
}

const BarMultiChart: React.FC<BarMultiChartProps> = (props) => {
  const { dataAry, total } = props;
  

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.legend}>
          <span>0%</span>
          <span>10%</span>
          <span>20%</span>
          <span>30%</span>
          <span>40%</span>
          <span>50%</span>
          <span>60%</span>
          <span>70%</span>
          <span>80%</span>
          <span>90%</span>
          <span>100%</span>
        </div>
        {dataAry.map((item, idx) => {
          const percent = Math.round((item.value / total) * 100);
          return (
            <div className={classes.chart} key={idx}>
              <div className={classes.barWrap}>
                <div className={classes.bar} style={{ height: percent + '%' }}>
                  <span className={classes.value}>{percent}%</span>
                </div>
              </div>

              <div className={classes.label}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { BarMultiChart };
