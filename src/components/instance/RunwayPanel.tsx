import { Panel, PanelHeader, PanelBody } from '@components/panel/PanelComponent';

export const RunwayPanel: React.FC = () => {
  return (
    <Panel className="section-runway">
      <PanelHeader>활주로 정보</PanelHeader>
      <PanelBody>
        <table className="table-runway">
          <tbody>
            <tr>
              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>

              {/* graph */}
              <td>
                <div className="runway-view">
                  <span>15L</span>
                  <div className="pic" />
                  <span>33R</span>
                </div>
              </td>

              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>

              {/* graph */}
              <td>
                <div className="runway-view bg--active">
                  <span>15L</span>
                  <div className="pic arr-right" />
                  <span>33R</span>
                </div>
              </td>

              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>

              {/* graph */}
              <td>
                <div className="runway-view bg--active">
                  <span>16L</span>
                  <div className="pic arr-left" />
                  <span>33R</span>
                </div>
              </td>

              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>

              {/* graph */}
              <td>
                <div className="runway-view bg--warn2">
                  <span>16R</span>
                  <div className="pic" />
                  <span>34L</span>
                </div>
              </td>

              <td>
                <span className="c--active">RVR</span>
                <span className="c--success">운고</span>
              </td>
              <td className="td--right">
                <span>2,000m</span>
                <span>25,000ft</span>
              </td>
              <td>
                <span className="c--active">풍속</span>
                <span className="c--success">풍향</span>
              </td>
              <td>
                <span>13.8kt</span>
                <span>서풍</span>
              </td>
            </tr>
          </tbody>
        </table>
      </PanelBody>
    </Panel>
  );
};
