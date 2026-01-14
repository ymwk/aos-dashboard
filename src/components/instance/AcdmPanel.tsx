import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { BarMultiChart } from '@components/chart/BarMultiChart';

export const AcdmPanel: React.FC = () => {
  return (
    <Panel className="section-ice">
      <PanelHeader>ACDM 운영지수</PanelHeader>
      <PanelBody>
        <BarMultiChart
          total={120}
          dataAry={[
            {
              value: 90,
              label: (
                <>
                  40분전
                  <br />
                  TTBT 품질
                </>
              ),
            },
            {
              value: 100,
              label: (
                <>
                  TTBT
                  <br />
                  품질
                </>
              ),
            },
            {
              value: 75,
              label: (
                <>
                  TSAT
                  <br />
                  품질
                </>
              ),
            },
            {
              value: 65,
              label: (
                <>
                  A-CDM
                  <br />
                  운영지수
                </>
              ),
            },
            {
              value: 65,
              label: (
                <>
                  CTOT 슬롯
                  <br />
                  준수율
                </>
              ),
            },
          ]}
        />
      </PanelBody>
    </Panel>
  );
};
