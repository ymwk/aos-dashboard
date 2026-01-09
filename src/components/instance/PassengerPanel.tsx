import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const PassengerPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>
        여객(실적/계획)
        <span className="unit">*단위: 천명</span>
      </PanelHeader>
      <PanelBody className="section-passenger">
        <table className="table-panel">
          <colgroup>
            <col style={{ width: '15%' }} />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th className="th-all">
                <span className="panel-label">전체</span>
              </th>
              <th className="th-t1">
                <span className="panel-label">제1터미널</span>
              </th>
              <th className="th-t2">
                <span className="panel-label">제2터미널</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="t--airport">
              <th className="th-icon">
                <i className="ic-comm i--airport" />
              </th>
              <td>559</td>
              <td>327/689</td>
              <td>52</td>
            </tr>
            <tr className="t--arrival">
              <th className="th-icon">
                <i className="ic-comm i--arrival" />
              </th>
              <td>270/615</td>
              <td>239/547</td>
              <td>29/63</td>
            </tr>
            <tr className="t--departure">
              <th className="th-icon">
                <i className="ic-comm i--departure" />
              </th>
              <td>289/621</td>
              <td>263/557</td>
              <td>23/57</td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
