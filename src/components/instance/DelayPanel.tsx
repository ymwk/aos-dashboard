import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { DelayChart } from '@components/chart/DelayChart';

export const DelayPanel: React.FC = () => {
  return (
    <Panel>
      <PanelHeader>지연시간별 현황</PanelHeader>
      <PanelBody>
        <div className="delay-wrap">
          <DelayChart total={100} value={0} color={'c3'} label={'120분 초과'} />
          <DelayChart total={100} value={15} color={'c2'} label={'90분~120분'} />
          <DelayChart total={100} value={49} color={'c2'} label={'60분~90분'} />
          <DelayChart total={100} value={28} color={'c1'} label={'30분~60분'} />
          <DelayChart total={100} value={82} color={'c1'} label={'16분~30분'} />
        </div>
      </PanelBody>
    </Panel>
  );
};
