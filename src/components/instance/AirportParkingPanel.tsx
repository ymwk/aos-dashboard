import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { SemiCircleChart } from '@components/chart/SemiCircleChart';

export const AirportParkingPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>주기장 85대 / 322대</PanelHeader>
      <PanelBody>
        <ul className="parkingchart-list">
          <li>
            <span className="panel-label">T1</span>
            <SemiCircleChart total={44} value={13} radius={38} stroke={18} bg={'#484F83'} color={'white'} />
            <div className="font-lg">13/44</div>
          </li>
          <li>
            <span className="panel-label">CA</span>
            <SemiCircleChart total={30} value={8} radius={38} stroke={18} bg={'#484F83'} color={'white'} />
            <div className="font-lg">8/30</div>
          </li>
          <li>
            <span className="panel-label">T2</span>
            <SemiCircleChart total={67} value={9} radius={38} stroke={18} bg={'#484F83'} color={'white'} />
            <div className="font-lg">9/67</div>
          </li>
          <li>
            <span className="panel-label">화물</span>
            <SemiCircleChart total={60} value={20} radius={38} stroke={18} bg={'#484F83'} color={'white'} />
            <div className="font-lg">20/60</div>
          </li>
          <li>
            <span className="panel-label">원격</span>
            <SemiCircleChart total={44} value={40} radius={38} stroke={18} bg={'#484F83'} color={'white'} />
            <div className="font-lg">40/44</div>
          </li>
          <li>
            <span className="panel-label">기타</span>
            <SemiCircleChart total={44} value={35} radius={38} stroke={18} bg={'#484F83'} color={'white'} />
            <div className="font-lg">35/44</div>
          </li>
        </ul>
      </PanelBody>
    </Panel>
  );
};
