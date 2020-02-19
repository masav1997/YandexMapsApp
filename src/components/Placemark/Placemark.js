import React from "react";
import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";

export class Point extends React.Component {
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
            <Placemark
              geometry={[55, 55]}
              properties={{
                balloonContentBody: "Это - метка."
              }}
              options={{
                preset: "islands#redHeartIcon"
              }}
            />
            <GeoObject
              geometry={{
                type: "Point",
                coordinates: [55.12, 55.38]
              }}
              properties={{
                iconContent: "Меня можно перетаскивать"
              }}
              options={{
                preset: "islands#blueStretchyIcon",
                draggable: true
              }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default Point;
