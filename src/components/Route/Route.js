import React from "react";
import { YMaps, Map, RoutePanel } from "react-yandex-maps";

export class Route extends React.Component {
  render() {
    return (
      <div>
        <YMaps
          query={{
            load: "package.full"
          }}
        >
          <Map
            width="100%"
            height="100vh"
            defaultState={{
              center: [51.661535, 39.200287],
              zoom: 2,
              controls: ["typeSelector", "zoomControl", "fullscreenControl"]
            }}
            options={{
              suppressMapOpenBlock: true
            }}
            instanceRef={ref => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
          >
            <RoutePanel
              instanceRef={ref => {
                if (ref) {
                  ref.routePanel.state.set({
                    fromEnabled: false,
                    from: "Ярославль",
                    to: "Краснодар",
                    type: "auto"
                  });
                }
              }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default Route;
