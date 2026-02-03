import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { HorizonChart } from '@components/chart/HorizonChart';

export const ParkingT2Panel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>T2 주차현황</PanelHeader>
      <PanelBody>
        <div className="parking-cont">
          <HorizonChart total={5535} value={5319} color={'#FE9716'} label="단기" />
          <HorizonChart total={9296} value={6513} color={'#00C077'} label="장기" />
          <HorizonChart total={3779} value={3495} color={'#00C077'} label="대행" />
        </div>
      </PanelBody>
    </Panel>
  );
};
