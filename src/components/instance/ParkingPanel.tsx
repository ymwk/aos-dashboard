import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { BarChart } from '@components/chart/BarChart';

export const ParkingPanel: React.FC = () => {
  return (
    <Panel className="grid-auto">
      <PanelHeader>주기장 수용량</PanelHeader>
      <PanelBody>
        <div className="parking-wrap">
          <BarChart
            total={44}
            value={40}
            label={
              <>
                <span>T1</span>
                <i className="ic-comm i--t1-bg s--sm"></i>
              </>
            }
          />
          <BarChart
            total={33}
            value={15}
            label={
              <>
                <span>T2</span>
                <i className="ic-comm i--t2-bg s--sm"></i>
              </>
            }
          />
          <BarChart
            total={30}
            value={17}
            label={
              <>
                <span>CA</span>
                <i className="ic-comm i--ca-bg s--sm"></i>
              </>
            }
          />
          <BarChart total={44} value={10} label={'화물'} />
          <BarChart total={33} value={10} label={'원격'} />
          <BarChart total={33} value={12} label={'기타'} />
        </div>
      </PanelBody>
    </Panel>
  );
};
