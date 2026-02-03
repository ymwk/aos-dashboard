import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const ShippingPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>
        화물실적
        <span className="unit">*단위: 톤</span>
      </PanelHeader>
      <PanelBody>
        <table className="table-panel table-luggage">
          <colgroup>
            <col style={{ width: '15%' }} />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>
                <span className="panel-label w--swide">전월</span>
              </th>
              <th>
                <span className="panel-label w--swide">‘25년 누계</span>
              </th>
              <th>
                <span className="panel-label w--swide">동기간누적비율</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="t--airport">
              <th className="th-icon">
                <i className="ic-comm i--airport" />
              </th>
              <td>5,201</td>
              <td>216,731</td>
              <td>100,1%</td>
            </tr>
            <tr className="t--arrival">
              <th className="th-icon">
                <i className="ic-comm i--arrival" />
              </th>
              <td>3,000</td>
              <td>107,088</td>
              <td>98%</td>
            </tr>
            <tr className="t--departure">
              <th className="th-icon">
                <i className="ic-comm i--departure" />
              </th>
              <td>2,201</td>
              <td>2,201</td>
              <td>102.0%</td>
            </tr>
            <tr>
              <th className="th-icon">
                <i className="ic-comm i--trans" />
              </th>
              <td>3,566</td>
              <td>13,677</td>
              <td>12,556</td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
