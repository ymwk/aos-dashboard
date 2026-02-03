import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { HorizonChart } from '@components/chart/HorizonChart';

export const ParkingT1Panel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>T1 주차현황</PanelHeader>
      <PanelBody>
        <div className="parking-cont">
          <HorizonChart total={4896} value={4702} color={'#FE9716'} label="단기" />
          <HorizonChart total={12859} value={11218} color={'#DD0000'} label="장기" />
          <HorizonChart total={6298} value={5407} color={'#00C077'} label="대행" />
        </div>
      </PanelBody>
    </Panel>
  );
};
