import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { ProgressChart } from '@components/chart/ProgressChart';

export const AirsideDelayPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>지연현황</PanelHeader>
      <PanelBody>
        <table className="table-panel table-airdelay">
          <thead>
            <tr>
              <th>
                <span className="panel-label s--sm">터미널</span>
              </th>
              <th>
                <span className="panel-label s--sm">시간</span>
              </th>
              <th>
                <span className="panel-label s--sm">목적지</span>
              </th>
              <th>
                <span className="panel-label s--sm">운항편</span>
              </th>
              <th>
                <span className="panel-label s--sm">승객수</span>
              </th>
              <th>
                <span className="panel-label s--sm">지연시간</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="label-wrap">
                  <span className="ic-label bg--warn">DLY</span>
                  <i className="ic-comm i--t1-bg" />
                </div>
              </th>
              <td>07:27</td>
              <td>뉴욕</td>
              <td>KE081</td>
              <td>130</td>
              <td>50분</td>
            </tr>
            <tr>
              <th>
                <div className="label-wrap">
                  <span className="ic-label bg--warn">DLY</span>
                  <i className="ic-comm i--t1-bg" />
                </div>
              </th>
              <td>07:27</td>
              <td>뉴욕</td>
              <td>KE081</td>
              <td>130</td>
              <td>50분</td>
            </tr>
            <tr>
              <th>
                <div className="label-wrap">
                  <span className="ic-label bg--warn">DLY</span>
                  <i className="ic-comm i--t1-bg" />
                </div>
              </th>
              <td>07:27</td>
              <td>뉴욕</td>
              <td>KE081</td>
              <td>130</td>
              <td>50분</td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
