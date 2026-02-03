import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const HourlyFlightPanel: React.FC = () => {
  return (
    <Panel className="section-timegraph">
      <PanelHeader>
        시간대별 운항
        <small>
          <span className="c--warn">1편</span> / <span className="c--active">1편</span>
        </small>
      </PanelHeader>
      <PanelBody>
        <div className="panel-cont">
          <span className="tit al--center">
            <i className="ic-comm i--arrival s--lg" />
          </span>
          <div className="cont" style={{ background: 'rgba(255,255,255,0.1' }}></div>
        </div>
        <div className="panel-cont">
          <span className="tit al--center">
            <i className="ic-comm i--departure s--lg" />
          </span>
          <div className="cont" style={{ background: 'rgba(255,255,255,0.1' }}></div>
        </div>
      </PanelBody>
    </Panel>
  );
};
