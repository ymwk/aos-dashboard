import React from 'react';
import { FlightPanel } from '@components/instance/FlightPanel';
import { PassengerPanel } from '@components/instance/PassengerPanel';
import { HourlyPanel } from '@components/instance/HourlyPanel';
import { HourlyFlightPanel } from '@components/instance/HourlyFlightPanel';
import { AirportRunwayPanel } from '@components/instance/AirportRunwayPanel';
import { ShippingPanel } from '@components/instance/ShippingPanel';
import { AirportParkingPanel } from '@components/instance/AirportParkingPanel';
import { AirportDelayPanel } from '@components/instance/AirportDelayPanel';
import { AirportCancelPanel } from '@components/instance/AirportCancelPanel';
import { TransferPanel } from '@components/instance/TransferPanel';
import { LuggagePanel } from '@components/instance/LuggagePanel';
import { ParkingT1Panel } from '@components/instance/ParkingT1Panel';
import { ParkingT2Panel } from '@components/instance/ParkingT2Panel';

import mapImg from '@assets/images/map/airport_map.png';

const DashboardTab1: React.FC = () => {
  return (
    <div className="container">
      <div className="airport-container">
        <FlightPanel />

        <div className="airport-map-container">
          <table className="airport-map-table">
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5} className="th-top">
                  <span>
                    제방빙 단계 : <em>Blue</em>
                  </span>
                </th>
              </tr>
              <tr>
                <th>
                  <span>완료</span>
                </th>
                <th>
                  <span>진행</span>
                </th>
                <th>
                  <span>대기</span>
                </th>
                <th className="th-ice">
                  <span>제빙시간(Pad In~Out)</span>
                </th>
                <th>
                  <span>어록 소요시간(ETD~ATD)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-lg">161</td>
                <td className="td-lg">4</td>
                <td className="td-lg">6</td>
                <td>
                  <div>최근 2시간 : 18 분</div>
                  <div>오늘 평균: 18 분</div>
                </td>
                <td>
                  <div>최근 2시간 : 45 분</div>
                  <div>오늘 평균: 48 분</div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="airport-map">
            <img src={mapImg} alt="" className='img-map'/>
          </div>
        </div>

        <PassengerPanel />

        <HourlyFlightPanel />

        <HourlyPanel />

        <div className="airport-column">
          <AirportDelayPanel />
          <AirportCancelPanel />
        </div>

        <div className="airport-column">
          <ParkingT1Panel />
          <ParkingT2Panel />
        </div>

        <AirportParkingPanel />

        <div className="airport-column">
          <TransferPanel />
          <LuggagePanel />
        </div>

        <AirportRunwayPanel />

        <ShippingPanel />
      </div>
    </div>
  );
};

export default DashboardTab1;
