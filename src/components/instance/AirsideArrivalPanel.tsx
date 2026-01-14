import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { ProgressChart } from '@components/chart/ProgressChart';

export const AirsideArrivalPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>
        <i className="ic-comm i--arrival-g"></i>
        Arrival
      </PanelHeader>
      <PanelBody>
        <table className="table-panel table-airside">
          <thead>
            <tr>
              <th></th>
              <th>
                <span className="panel-label s--sm">전체</span>
              </th>
              <th>
                <span className="panel-label s--sm bg--active">정시</span>
              </th>
              <th>
                <span className="panel-label s--sm bg--warn">
                  지연
                  <span className="panel-tooltip">15분미만</span>
                </span>
              </th>
              <th>
                <span className="panel-label s--sm bg--warn">
                  지연
                  <span className="panel-tooltip">60분미만</span>
                </span>
              </th>
              <th>
                <span className="panel-label s--sm bg--warn">
                  지연
                  <span className="panel-tooltip">60분이상</span>
                </span>
              </th>
              <th>
                <span className="panel-label s--sm bg--warn2">지연율</span>
              </th>
              <th>
                <span className="panel-label s--sm bg--error">결항</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="ic-comm i--t2-bg s--sm" />
              </td>
              <td>320</td>
              <td>266</td>
              <td>53</td>
              <td>49</td>
              <td>4</td>
              <td>
                <ProgressChart total={106} value={45} type="airside" />
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <i className="ic-comm i--t1-bg s--sm" />
              </td>
              <td>320</td>
              <td>266</td>
              <td>53</td>
              <td>49</td>
              <td>4</td>
              <td>
                <ProgressChart total={46} value={45} type="airside" />
              </td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
