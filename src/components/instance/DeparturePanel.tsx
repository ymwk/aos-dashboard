import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { ProgressChart } from '@components/chart/ProgressChart';
import classes from './schedule.module.scss';

export const DeparturePanel: React.FC = () => {
  return (
    <Panel className={`grid-4 ${classes.panel}`}>
      <PanelHeader className={classes.header}>
        <div className={classes.summary}>
          <div className={classes.tit}>
            <em>Departure</em>
            <i className="ic-comm i--departure-w" />
            <span>12/30</span>
          </div>
          <span>정상 90%</span>
          <span>
            지연 <span className="c--warn">10</span>%
          </span>
        </div>

        <div className={classes.utils}>
          <span className={classes.tit}>다음시간</span>
          <span className={classes.item}>
            <i className="ic-comm i--plane" />
            40편
          </span>
          <span className={classes.item}>
            <i className="ic-comm i--gate" />
            170명
          </span>
        </div>
      </PanelHeader>
      <PanelBody>
        <table className="table-panel table-schedule st--departure">
          <thead>
            <tr>
              <th>
                <span className="panel-label s--sm">터미널</span>
              </th>
              <th>
                <span className="panel-label s--sm">운항편</span>
              </th>
              <th>
                <span className="panel-label s--sm">예정시간</span>
              </th>
              <th>
                <span className="panel-label s--sm">목적지</span>
              </th>
              <th>
                <span className="panel-label s--sm">탑승객</span>
              </th>
              <th>
                <span className="panel-label s--sm">체크인</span>
              </th>
              <th>
                <span className="panel-label s--sm">출국장</span>
              </th>
              <th>
                <span className="panel-label s--sm">탑승구</span>
              </th>
              <th>
                <span className="panel-label s--sm">게이트</span>
              </th>
              <th>
                <span className="panel-label s--sm">실제출발시간</span>
              </th>
              <th>
                <span className="panel-label s--sm">상태</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="ic-comm i--t1-bg s--sm" />
              </td>
              <td>KE011</td>
              <td>09:00</td>
              <td>뉴욕</td>
              <td>162</td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>50%</td>
              <td>2</td>
              <td>08:20</td>
              <td>정상</td>
            </tr>
            <tr>
              <td>
                <i className="ic-comm i--t2-bg s--sm" />
              </td>
              <td>KE011</td>
              <td>09:00</td>
              <td>뉴욕</td>
              <td>162</td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>50%</td>
              <td>2</td>
              <td>
                <span className="ic-label bg--warn s--sm">09:30</span>
              </td>
              <td>
                <em className="c--warn">지연</em>
              </td>
            </tr>
            <tr>
              <td>
                <i className="ic-comm i--t2-bg s--sm" />
              </td>
              <td>KE011</td>
              <td>09:00</td>
              <td>뉴욕</td>
              <td>162</td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>
                <ProgressChart total={90} value={87} />
              </td>
              <td>50%</td>
              <td>2</td>
              <td>08:20</td>
              <td>정상</td>
            </tr>
            <tr>
              <td>
                <i className="ic-comm i--t1-bg s--sm" />
              </td>
              <td>KE011</td>
              <td>09:00</td>
              <td>뉴욕</td>
              <td>162</td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>
                <ProgressChart total={90} value={70} />
              </td>
              <td>50%</td>
              <td>2</td>
              <td>08:20</td>
              <td>정상</td>
            </tr>
            <tr>
              <td>
                <i className="ic-comm i--t1-bg s--sm" />
              </td>
              <td>KE011</td>
              <td>09:00</td>
              <td>뉴욕</td>
              <td>162</td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>
                <ProgressChart total={90} value={81} />
              </td>
              <td>50%</td>
              <td>2</td>
              <td>08:20</td>
              <td>정상</td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
