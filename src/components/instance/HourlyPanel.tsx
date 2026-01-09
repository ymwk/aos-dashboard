import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const HourlyPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>
        시간대별 출발여객
        <small>T1 219명 / T2 219명</small>
      </PanelHeader>
      <PanelBody className="section-timegraph">
        <div className="panel-cont">
          <span className="tit al--center">
            <i className="ic-comm i--t1" />
          </span>
          <div className="cont" style={{ background: '#eee' }}></div>
        </div>
        <div className="panel-cont">
          <span className="tit al--center">
            <i className="ic-comm i--t2" />
          </span>
          <div className="cont" style={{ background: '#eee' }}></div>
        </div>
      </PanelBody>
    </Panel>
  );
};
