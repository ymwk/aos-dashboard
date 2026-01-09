import React, { useState, useRef } from 'react';
import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import classes from './problem.module.scss'

export const ProblemPanel: React.FC = () => {
  const slideData = [
    { current: '장기체류편', currentvalue: 10, prev: '결항', next: '지연' },
    { current: '결항', currentvalue: 4, prev: '장기체류편', next: '지연' },
    { current: '지연', currentvalue: 3, prev: '결항', next: '장기체류편' },
  ];

  const [currentText, setCurrentText] = useState(slideData[0]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Panel>
      <PanelHeader>
        <div className={classes.swiperHeader}>
          <div>
            <button type="button" className={classes.prevBtn} ref={prevRef}>
              <i className="ic-comm i--prev" />
            </button>
            <span>{currentText.prev}</span>
          </div>
          <div className={classes.current}>
            <span className="label-current">{currentText.current}</span>
            <small>({currentText.currentvalue})</small>
          </div>
          <div>
            <span>{currentText.next}</span>
            <button type="button" className={classes.nextBtn} ref={nextRef}>
              <i className="ic-comm i--next" />
            </button>
          </div>
        </div>
      </PanelHeader>
      <PanelBody className={classes.body}>
        <Swiper
          className={classes.swiper}
          slidesPerView={1}
          spaceBetween={30}
          loop
          speed={800}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current ?? undefined,
            nextEl: nextRef.current ?? undefined,
          }}
          onSlideChange={(swiper) => {
            setCurrentText(slideData[swiper.realIndex]);
          }}
        >
          <SwiperSlide>
            <table className="table-panel st--border">
              <thead>
                <tr>
                  <th className="th-haslabel">
                    <span className="panel-label s--lg">터미널</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">운항수</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">여객수</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">지연시간</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">GCT</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>10</td>
                  <td>150</td>
                  <td>
                    <span className="c--warn">120분이상</span>
                  </td>
                  <td>07:27</td>
                </tr>
              </tbody>
            </table>
          </SwiperSlide>

          <SwiperSlide>
            <table className="table-panel st--border">
              <thead>
                <tr>
                  <th className="th-haslabel">
                    <span className="panel-label s--lg">터미널</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">시간</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">목적지</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">운항편</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">승객수</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">지연시간</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                  <td>65분</td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">항공기 연결(도착지연)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                  <td>65분</td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">공항,관제사유 접속지연</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                  <td>65분</td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">항로혼잡(출발지연)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--warn">DLY</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                  <td>65분</td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">정비(출발지연)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </SwiperSlide>

          <SwiperSlide>
            <table className="table-panel st--border">
              <thead>
                <tr>
                  <th className="th-haslabel">
                    <span className="panel-label s--lg">터미널</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">시간</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">목적지</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">운항편</span>
                  </th>
                  <th>
                    <span className="panel-label s--lg">승객수</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--error">CNL</span>
                      <i className="ic-comm i--t1-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">정비사고로 인한 결항</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--error">CNL</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">기상악화로 인한 결항</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="th-haslabel">
                    <div className="label-wrap">
                      <span className="ic-label c--error">CNL</span>
                      <i className="ic-comm i--t2-bg" />
                    </div>
                  </th>
                  <td>07:27</td>
                  <td>뉴욕</td>
                  <td>KE081</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <div className="stay-detail">
                      <span>사유</span>
                      <span className="ic-label st--round c--error">기상악화로 인한 결항</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </SwiperSlide>
        </Swiper>
      </PanelBody>
    </Panel>
  );
};
