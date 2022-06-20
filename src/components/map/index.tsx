import React, { useState, useEffect } from 'react';
import { Scene, LineLayer, PolygonLayer, Popup, PointLayer } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
import { GaodeMapV2 } from '@antv/l7-maps'; // 默认引入高德2.0 版本
import data from '../../data/area.json';
const Map = () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMapV2({
        // pitch: 35.210526315789465,
        mapStyle: 'amap://styles/grey',
        center: [99.828225, 23.472719],
        zoom: 9,
        token: '3f730ff87182dd4ccf1446f014d94592',
      }),
      logoVisible: false,
    });
    const emptyFeatureCollextion = {
      type: 'FeatureCollection',
      features: [],
    };
    scene.on('loaded', () => {
      const chinaPolygonLayer = new PolygonLayer()
        .source(data)
        .color('name', [
          'rgb(239,243,255)',
          'rgb(189,215,231)',
          'rgb(107,174,214)',
          'rgb(49,130,189)',
          'rgb(8,81,156)',
        ])
        .shape('fill');
      //  图层边界
      const chinaBorderLineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(data)
        .color('rgb(93,112,146)')
        .size(0.6);

      const selectLineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(emptyFeatureCollextion)
        .color('#fff')
        .size(2);

      const boxLayer = new PolygonLayer({})
        .source(emptyFeatureCollextion)
        .color('#fff')
        .size(2)
        .style({
          opacity: 0.6,
          lineType: 'dash',
          dashArray: [5, 5],
        })
        .shape('line');

      chinaPolygonLayer.on('unclick', () => {
        selectLineLayer.setData(emptyFeatureCollextion);
      });

      scene.addLayer(chinaPolygonLayer);
      scene.addLayer(chinaBorderLineLayer);
      scene.addLayer(selectLineLayer);
      scene.addLayer(boxLayer);
      chinaPolygonLayer.on('mousemove', (e) => {
        const popup = new Popup({
          offsets: [0, 0],
          closeButton: false,
        })
          .setLnglat(e.lngLat)
          .setHTML(
            `<span style="color:red">${e.feature.properties.name}</span>`,
          );
        scene.addPopup(popup);
      });

      fetch('/public/points.csv')
        .then((res) => res.text())
        .then((data) => {
          const pointLayer = new PointLayer({})
            .source(data, {
              parser: {
                type: 'csv',
                x: 'Longitude',
                y: 'Latitude',
              },
            })
            .shape('circle')
            .active(true)
            .animate(true)
            .size(56)
            .color('#4cfd47')
            .style({
              opacity: 1,
            });

          scene.addLayer(pointLayer);
        });
    });
  }, []);

  return <div id="map" />;
};
export default Map;
