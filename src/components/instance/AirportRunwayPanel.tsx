import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const AirportRunwayPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>활주로 (1시간)</PanelHeader>
      <PanelBody>
        <table className="table-panel table-airport">
          <thead>
            <tr>
              <th className="th-icon"></th>
              <th>
                <span className="panel-label w--wide">전체</span>
              </th>
              <th>
                <span className="panel-label w--wide">15R-33L</span>
              </th>
              <th>
                <span className="panel-label w--wide">15R-33R</span>
              </th>
              <th>
                <span className="panel-label w--wide">16L-34R</span>
              </th>
              <th>
                <span className="panel-label w--wide">16R-34L</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="t--arrival">
              <th className="th-icon">
                <i className="ic-comm i--arrival s--lg"></i>
              </th>
              <td>23</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>
                <span className="c--danger">23</span>
              </td>
            </tr>
            <tr className="t--departure">
              <th className="th-icon">
                <i className="ic-comm i--departure s--lg"></i>
              </th>
              <td>23</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>
                <span className="c--danger">23</span>
              </td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
