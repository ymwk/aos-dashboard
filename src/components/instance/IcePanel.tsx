import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const IcePanel: React.FC = () => {
  return (
    <Panel className="section-ice">
      <PanelHeader>제빙단계 지표</PanelHeader>
      <PanelBody>
        <table className="table-panel">
          <colgroup>
            <col style={{ width: '15%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>
                <span className="s--lg">전체</span>
              </th>
              <th>
                <span className="panel-label t--rect bg--warn">
                  지연시간
                  <br />
                  (EOBT-ATOT)
                </span>
              </th>
              <th>
                <span className="panel-label t--rect">
                  이륙소요시간
                  <br />
                  (AZRT-ATOT)
                </span>
              </th>
              <th>
                <span className="panel-label t--rect bg--active">
                  PAD 점유시
                  <br />
                  (APIT-APOT)
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1H</th>
              <td>
                <span className="c--active">0</span>
                <span>분</span>
              </td>
              <td>
                <span className="c--active">0</span>
                <span>분</span>
              </td>
              <td>
                <span className="c--active">0</span>
                <span>분</span>
              </td>
            </tr>
            <tr>
              <th>1일</th>
              <td>
                <span className="c--active">0</span>
                <span>분</span>
              </td>
              <td>
                <span className="c--active">0</span>
                <span>분</span>
              </td>
              <td>
                <span className="c--active">0</span>
                <span>분</span>
              </td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
