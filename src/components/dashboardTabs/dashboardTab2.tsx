import React from 'react';
import { Section } from '@components/panel/PanelComponent';

import { FlightPanel } from '@components/instance/FlightPanel';
import { PassengerPanel } from '@components/instance/PassengerPanel';
import { RunwayPanel } from '@components/instance/RunwayPanel';
import { IcePanel } from '@components/instance/IcePanel';
import { AcdmPanel } from '@components/instance/AcdmPanel';
import { AirsidePanel } from '@components/instance/AirsidePanel';
import { TaxiPanel } from '@components/instance/TaxiPanel';
import { FixedPanel } from '@components/instance/FixedPanel';
import { DelayPanel } from '@components/instance/DelayPanel';
import { CapacityPanel } from '@components/instance/CapacityPanel';
import { ParkingPanel } from '@components/instance/ParkingPanel';
import { TravelPanel } from '@components/instance/TravelPanel';

const DashboardTab2: React.FC = () => {
  return (
    <div className="container">
      <Section>
        {/* 운항 실적/계획 */}
        <FlightPanel />

        {/* 활주로 정보 */}
        <RunwayPanel />

        {/* 제빙단계 지표 */}
        <IcePanel />

        {/* 여객 실적/계획 */}
        <PassengerPanel />
      </Section>

      <Section className="flex-full flex-auto">
        {/* 공항 수용량 */}
        <CapacityPanel />

        {/* 주기장 수용량 */}
        <ParkingPanel />

        {/* 지상이동 추가 시간 */}
        <TravelPanel />

        {/* 지연시간별 현황 */}
        <DelayPanel />

        {/* 운항정시성 */}
        <FixedPanel />

        {/* TAXI TIME */}
        <TaxiPanel />
      </Section>

      <Section className="flex-full">
        {/* Airside 현황 */}
        <AirsidePanel />

        {/* ACDM 운영지수 */}
        <AcdmPanel />
      </Section>
    </div>
  );
};

export default DashboardTab2;
