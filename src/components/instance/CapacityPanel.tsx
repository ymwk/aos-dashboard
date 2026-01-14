import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { HalfDonutChart } from '@components/chart/HalfDonutChart';

export const CapacityPanel: React.FC = () => {
  return (
    <Panel className="grid-auto">
      <PanelHeader>공항 수용량</PanelHeader>
      <PanelBody>
        <div className="half-wrap">
          <HalfDonutChart total={100} value={60} total2={100} value2={80} label="도착" />
          <HalfDonutChart total={100} value={60} total2={100} value2={50} label="출발" />
        </div>
      </PanelBody>
    </Panel>
  );
};
