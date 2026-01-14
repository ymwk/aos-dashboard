import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { BitBarChart } from '@components/chart/BitBarChart';

export const TravelPanel: React.FC = () => {
  return (
    <Panel className="grid-auto">
      <PanelHeader>지상이동 추가 시간</PanelHeader>
      <PanelBody>
        <div className="bitbar-wrap">
          <BitBarChart exp={19} added={69} color={'c1'} label={'DEP'} />
          <BitBarChart exp={10} added={65} color={'c1'} label={'계류장'} />
          <BitBarChart exp={9} added={4} color={'c2'} label={'기동지역'} />
          <BitBarChart exp={11} added={8} color={'c2'} label={'ARR'} />
          <BitBarChart exp={4} added={5} color={'c3'} label={'계류장'} />
          <BitBarChart exp={7} added={3} color={'c3'} label={'기동지역'} />
        </div>
      </PanelBody>
    </Panel>
  );
};
