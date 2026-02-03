import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const AirportCancelPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>지연 / 결항</PanelHeader>
      <PanelBody>
        <table className="table-panel table-airport">
          <thead>
            <tr>
              <th className="th-icon"></th>
              <th>
                <span className="panel-label">지연</span>
              </th>
              <th>
                <span className="panel-label">결항</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="t--arrival">
              <th className="th-icon">
                <i className="ic-comm i--arrival s--lg"></i>
              </th>
              <td>
                <span className="c--delay">248</span>
              </td>
              <td>
                <span className="c--danger">5</span>
              </td>
            </tr>
            <tr className="t--departure">
              <th className="th-icon">
                <i className="ic-comm i--departure s--lg"></i>
              </th>
              <td>
                <span className="c--delay">171</span>
              </td>
              <td>
                <span className="c--danger">4</span>
              </td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
