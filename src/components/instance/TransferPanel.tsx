import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { SemiCircleChart } from '@components/chart/SemiCircleChart';

export const TransferPanel: React.FC = () => {
  return (
    <Panel className="section-transfer">
      <PanelHeader>환승(일누적)</PanelHeader>
      <PanelBody>
        <div className="transfer-cont">
          <SemiCircleChart total={6702} value={800} radius={65} stroke={30} bg={'#484F83'} color={'#DD9200'} />
          <span className="transfer-label">총승객대비</span>
          <span className="font-lg">6,702명</span>
        </div>
      </PanelBody>
    </Panel>
  );
};
