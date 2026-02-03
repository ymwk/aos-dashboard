import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { SemiCircleChart } from '@components/chart/SemiCircleChart';

export const AirportDelayPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>지연율(정기여객편)</PanelHeader>
      <PanelBody>
        <ul className="parkingchart-list">
          <li>
            <span className="panel-label">도착</span>
            <SemiCircleChart total={228} value={107} radius={45} stroke={20} bg={'#484F83'} color={'#DD9200'} />
            <div className="font-lg c--warn">107/228</div>
          </li>
          <li>
            <span className="panel-label">출발</span>
            <SemiCircleChart total={258} value={62} radius={45} stroke={20} bg={'#484F83'} color={'#2F88DD'} />
            <div className="font-lg c--active">8/30</div>
          </li>
        </ul>
      </PanelBody>
    </Panel>
  );
};
