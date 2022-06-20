import React, { useState, useEffect } from 'react';
import { Scene, LineLayer, PolygonLayer } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
import { GaodeMapV2 } from '@antv/l7-maps'; // 默认引入高德2.0 版本
import data from '../../data/area.json';
const Map = () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMapV2({
        pitch: 35.210526315789465,
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
      scene.addLayer(chinaPolygonLayer);
    });
  }, []);

  return <div id="map" />;
};
export default Map;
