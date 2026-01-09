import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import classes from './weather.module.scss';

export const WeatherPanel: React.FC = () => {
  const weatherTabs = ['기본', '저시정', '강설', '태풍'];

  return (
    <Panel>
      <PanelHeader>기상정보</PanelHeader>
      <PanelBody>
        <div className={classes.swiperWrapper}>
          <Swiper
            className={classes.swiper}
            slidesPerView={1}
            spaceBetween={30}
            speed={800}
            direction="vertical"
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => `<span class="${className}">${weatherTabs[index]}</span>`,
            }}
          >
            <SwiperSlide>
              <div className={classes.weather}>
                <div className={classes.icon}>
                  <i className="ic-comm i--w-sunny" />
                </div>
                <div className={classes.data}>
                  <span className={classes.tit}>
                    <em>24</em>°C
                  </span>
                  <span className="desc">어제보다 0.2° 낮아요 / 구름 많음</span>
                  <div className={classes.dataList}>
                    <span>풍향 서풍</span>
                    <span>풍속 6kt</span>
                    <span>시정 10km</span>
                    <span>습도 40%</span>
                    <span>운고 6.66ft</span>
                    <span>일강수 0mm</span>
                    <span>적설 0mm</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <th>시간</th>
                    <td>14시</td>
                    <td>15시</td>
                    <td>16시</td>
                    <td>17시</td>
                    <td>18시</td>
                    <td>19시</td>
                  </tr>
                  <tr>
                    <th>날씨</th>
                    <td>
                      <i className="ic-comm i--w-sun-cloud s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                  </tr>
                  <tr>
                    <th>기온</th>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                  </tr>
                  <tr>
                    <th>풍향</th>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                  </tr>
                  <tr>
                    <th>풍속(kt)</th>
                    <td>10</td>
                    <td>12</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th>운고(m)</th>
                    <td>3,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                  </tr>
                  <tr>
                    <th>시정</th>
                    <td>6,000</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>

            <SwiperSlide>
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <th>시간</th>
                    <td>14시</td>
                    <td>15시</td>
                    <td>16시</td>
                    <td>17시</td>
                    <td>18시</td>
                    <td>19시</td>
                  </tr>
                  <tr>
                    <th>날씨</th>
                    <td>
                      <i className="ic-comm i--w-sun-cloud s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                  </tr>
                  <tr>
                    <th>기온</th>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                  </tr>
                  <tr>
                    <th>풍향</th>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                  </tr>
                  <tr>
                    <th>풍속(kt)</th>
                    <td>10</td>
                    <td>12</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th>운고(m)</th>
                    <td>3,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                  </tr>
                  <tr>
                    <th>시정</th>
                    <td>6,000</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>

            <SwiperSlide>
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <th>시간</th>
                    <td>14시</td>
                    <td>15시</td>
                    <td>16시</td>
                    <td>17시</td>
                    <td>18시</td>
                    <td>19시</td>
                  </tr>
                  <tr>
                    <th>날씨</th>
                    <td>
                      <i className="ic-comm i--w-sun-cloud s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                    <td>
                      <i className="ic-comm i--w-sunny s--sm" />
                    </td>
                  </tr>
                  <tr>
                    <th>기온</th>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                    <td>24°C</td>
                  </tr>
                  <tr>
                    <th>풍향</th>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                    <td>서풍</td>
                  </tr>
                  <tr>
                    <th>풍속(kt)</th>
                    <td>10</td>
                    <td>12</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th>운고(m)</th>
                    <td>3,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                    <td>20,000</td>
                  </tr>
                  <tr>
                    <th>시정</th>
                    <td>6,000</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                    <td>&gt;10km</td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
          </Swiper>
        </div>
      </PanelBody>
    </Panel>
  );
};
