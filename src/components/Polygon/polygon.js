import React from "react";
import { YMaps, Map, Polygon } from "react-yandex-maps";

export class PolygonEditor extends React.Component {
  state = { ymaps: null };
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
              center: [55, 55],
              zoom: 9,
              controls: ["typeSelector", "zoomControl", "fullscreenControl"]
            }}
            options={{
              suppressMapOpenBlock: true
            }}
            instanceRef={ref => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
          >
            <Polygon
              onLoad={ymaps => this.setState({ ymaps })}
              geometry={[[]]}
              options={{
                fillColor: "#00ffff",
                strokeColor: "#000000",
                opacity: 0.5,
                strokeWidth: 5
              }}
              instanceRef={ref => {
                if (ref && this.state.ymaps) {
                  ref.editor.startDrawing();
                }
              }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default PolygonEditor;
