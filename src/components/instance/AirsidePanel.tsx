import { Panel, PanelBody } from '@components/panel/PanelComponent';
import { AirsideArrivalPanel } from './AirsideArrivalPanel';
import { AirsideDeparturePanel } from './AirsideDeparturePanel';
import { AirsideDelayPanel } from './AirsideDelayPanel';

export const AirsidePanel: React.FC = () => {
  return (
    <Panel className="grid-6">
      <PanelBody>
        <span className="panel-label t--title">10시 기준 실시간 Airside 현황</span>
        <div className="airside-wrap">
          <AirsideArrivalPanel />
          <AirsideDelayPanel />
          <AirsideDeparturePanel />
        </div>
      </PanelBody>
    </Panel>
  );
};
