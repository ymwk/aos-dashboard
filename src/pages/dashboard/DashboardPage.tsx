import { useState } from 'react';
import { Header } from '@components/layout';
import { Checkbox } from '@components/input';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import DashboardTab1 from '@components/dashboardTabs/dashboardTab1';
import DashboardTab2 from '@components/dashboardTabs/dashboardTab2';
import DashboardTab3 from '@components/dashboardTabs/dashboardTab3';

const DashboardPage: React.FC = () => {
  const dashboardTabs = ['공항', '운항', '공항+운항'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`wrapper dashboard${activeIndex + 1}`}>
      <Header title={`${dashboardTabs[activeIndex]} 대시보드`} />
      <div className="dashboard-pagination-wrap">
        <div className="dashboard-pagination" id="dashboard-pagination"></div>
        <Checkbox label="자동전환" />
      </div>
      <div className="dashboard-wrapper">
        <Swiper
          className="swiper-dashboard"
          slidesPerView={1}
          spaceBetween={30}
          speed={800}
          modules={[Pagination, Autoplay]}
          pagination={{
            el: '#dashboard-pagination',
            clickable: true,
            renderBullet: (index, className) =>
              `<button type="button" class="${className}">${dashboardTabs[index]}</button>`,
          }}
          // 슬라이드 변경될 때마다 activeIndex를 업데이트
          onActiveIndexChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          initialSlide={1}
        >
          <SwiperSlide>
            <DashboardTab1 />
          </SwiperSlide>

          <SwiperSlide>
            <DashboardTab2 />
          </SwiperSlide>

          <SwiperSlide>
            <DashboardTab3 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DashboardPage;
