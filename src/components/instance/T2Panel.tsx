import { Panel } from '@components/panel/PanelComponent';
import { ProgressChart } from '@components/chart/ProgressChart';
import classes from './terminal.module.scss';

export const T2Panel: React.FC = () => {
  return (
    <Panel className="grid-3">
      <div className={classes.terminal}>
        <i className="ic-comm i--t2-g" />
        <div className={classes.contarea}>
          <div className={classes.circle}>
            <div className={classes.circleCont}>
              <span className={classes.title}>T2</span>
              <div className={classes.map}>
                <div className={classes.num}>
                  <span className={classes.state}>1</span>
                  <span className={`${classes.state} ${classes.step2}`}>2</span>
                </div>
                <div className={classes.mapAlp}>
                  <span className={`${classes.state} ${classes.step1}`}>A</span>
                  <span className={`${classes.state} ${classes.step2}`}>B</span>
                  <span className={classes.state}>C</span>
                  <span className={classes.state}>D</span>
                  <span className={`${classes.state} ${classes.step3}`}>E</span>
                  <span className={`${classes.state} ${classes.step3}`}>F</span>
                  <span className={`${classes.state} ${classes.step2}`}>G</span>
                  <span className={classes.state}>H</span>
                  <span className={classes.state}>I</span>
                  <span className={classes.state}>J</span>
                  <span className={`${classes.state} ${classes.step3}`}>K</span>
                  <span className={`${classes.state} ${classes.step2}`}>L</span>
                  <span className={`${classes.state} ${classes.step2}`}>M</span>
                  <span className={`${classes.state} ${classes.step2}`}>N</span>
                </div>
              </div>
              <div className={classes.parking}>
                <i className="ic-comm i--parking" />
                <div className={classes.parkingState}>
                  <span className={classes.label}>
                    단기
                    <span className={`${classes.state} ${classes.step3}`}>혼</span>
                  </span>
                  <span className={classes.label}>
                    장기
                    <span className={`${classes.state} ${classes.step2}`}>여</span>
                  </span>
                  <span className={classes.label}>
                    대행
                    <span className={`${classes.state} ${classes.step1}`}>보</span>
                  </span>
                </div>
                {/* parking-state */}
              </div>
              {/* terminal-parking */}
            </div>
            {/* terminal-circle-cont */}
          </div>
          {/* terminal-circle */}

          <div className={classes.terminalState}>
            <span className={classes.tit}>9시대 출발</span>
            <span className={`${classes.value} ${classes.lg}`}>15편</span>
            <span className={`${classes.value} ${classes.sm}`}>2000명</span>
            <span className={classes.value}>80%</span>
            <span className={classes.value}>90%</span>
            <span className={classes.value}>100%</span>
            <span className={classes.state}>
              <span className={classes.name}>대기</span>
              <span className={classes.num}>0</span>
            </span>
            <span className={classes.state}>
              <span className={classes.name}>탑승</span>
              <span className={classes.num}>2</span>
            </span>
            <span className={classes.state}>
              <span className={classes.name}>출발</span>
              <span className={classes.num}>5</span>
            </span>
            <span className={classes.state}>
              <span className={`${classes.name} c--warn`}>지연</span>
              <span className={classes.num}>1</span>
            </span>
            <span className={classes.state}>
              <span className={`${classes.name} c--cancel`}>취소</span>
              <span className={classes.num}>1</span>
            </span>
            <span className={classes.state}>
              <span className={classes.name}>이륙</span>
              <span className={classes.num}>6</span>
            </span>
          </div>

          <div className={`${classes.terminalState} ${classes.next}`}>
            <span className={classes.tit}>다음시간</span>
            <span className={classes.value}>
              <span className={classes.name}>출발</span>
              <span className={classes.num}>20편</span>
            </span>
            <span className={classes.value}>
              <span className={classes.name}>여객</span>
              <span className={classes.num}>5000명</span>
            </span>
            <span className={classes.graph}>
              <span className={classes.ico}>
                <i className="ic-comm i--checkin-w" />
              </span>
              체크인
              <ProgressChart total={90} value={45} type="terminal" />
            </span>
            <span className={classes.graph}>
              <span className={`${classes.ico} ${classes.c2}`}>
                <i className="ic-comm i--dgate-w" />
              </span>
              출국장
              <ProgressChart total={90} value={30} type="terminal" />
            </span>
            <span className={classes.graph}>
              <span className={classes.ico}>
                <i className="ic-comm i--bgate-w" />
              </span>
              탑승구
              <ProgressChart total={90} value={20} type="terminal" />
            </span>
            <span className={classes.state}>14</span>
            <span className={classes.state}>2</span>
            <span className={classes.state}>1</span>
            <span className={classes.state}>2</span>
            <span className={classes.state}>1</span>
            <span className={classes.state}>0</span>
          </div>
        </div>
        {/* terminal-cont */}
      </div>
    </Panel>
  );
};
