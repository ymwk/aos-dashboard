import React from 'react';
import { Section } from '@components/panel/PanelComponent';

import { FlightPanel } from '@components/instance/FlightPanel';
import { WeatherPanel } from '@components/instance/WeatherPanel';
import { PassengerPanel } from '@components/instance/PassengerPanel';
import { RunwayPanel } from '@components/instance/RunwayPanel';

const DashboardTab2: React.FC = () => {
  return (
    <div className="container">
      <Section>
        {/* 운항 실적/계획 */}
        <FlightPanel />

        {/* 활주로 정보 */}
        <RunwayPanel />

        {/* 기상정보 */}
        <WeatherPanel />

        {/* 여겍 실적/계획 */}
        <PassengerPanel />
      </Section>

      <Section className="flex-full"></Section>

      <Section className="flex-full"></Section>
    </div>
  );
};

export default DashboardTab2;
