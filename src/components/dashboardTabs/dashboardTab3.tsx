import React from 'react';
import { Section } from '@components/panel/PanelComponent';

import { FlightPanel } from '@components/instance/FlightPanel';
import { HourlyPanel } from '@components/instance/HourlyPanel';
import { WeatherPanel } from '@components/instance/WeatherPanel';
import { PassengerPanel } from '@components/instance/PassengerPanel';
import { ProblemPanel } from '@components/instance/ProblemPanel';
import { T1Panel } from '@components/instance/T1Panel';
import { T2Panel } from '@components/instance/T2Panel';
import { DeparturePanel } from '@components/instance/DeparturePanel';
import { ArrivalPanel } from '@components/instance/ArrivalPanel';

const DashboardTab3: React.FC = () => {
  return (
    <div className="container">
      <Section>
        {/* 운항 실적/계획 */}
        <FlightPanel />

        {/* 시간대별 출발여객 */}
        <HourlyPanel />

        {/* 기상정보 */}
        <WeatherPanel />

        {/* 여겍 실적/계획 */}
        <PassengerPanel />
      </Section>

      <Section className="flex-full">
        {/* T1 터미널 */}
        <T1Panel />

        {/* T2 터미널 */}
        <T2Panel />

        {/* 장기체류/지연/결항 */}
        <ProblemPanel />
      </Section>

      <Section>
        {/* 출발 */}
        <DeparturePanel />

        {/* 도착 */}
        <ArrivalPanel />
      </Section>
    </div>
  );
};

export default DashboardTab3;
