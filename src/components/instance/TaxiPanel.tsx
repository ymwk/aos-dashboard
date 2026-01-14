import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { DonutChart } from '@components/chart/DonutChart'

export const TaxiPanel: React.FC = () => {
  return (
    <Panel className="grid-1">
      <PanelHeader>TAXI TIME</PanelHeader>
      <PanelBody>
        <div className="donut-wrap">
          <DonutChart total={60} value={19} unit="min" type="departure" />
          <DonutChart total={60} value={35} unit="min" type="arrival" />
        </div>
      </PanelBody>
    </Panel>
  );
};
