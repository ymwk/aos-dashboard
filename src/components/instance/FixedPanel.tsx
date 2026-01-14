import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { DonutChart } from '@components/chart/DonutChart';

export const FixedPanel: React.FC = () => {
  return (
    <Panel className="grid-1">
      <PanelHeader>운항정시성</PanelHeader>
      <PanelBody>
        <div className="donut-wrap">
          <DonutChart total={12} value={11} unit="%" type="departure" dataview />
          <DonutChart total={8} value={7} unit="%" type="arrival" dataview />
        </div>
      </PanelBody>
    </Panel>
  );
};
