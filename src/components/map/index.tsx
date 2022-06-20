import React, { useState, useEffect } from 'react';
import { Scene } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
import { GaodeMapV2 } from '@antv/l7-maps'; // 默认引入高德2.0 版本
import area from '../../data/area.json';
const Map = () => {
  const [list, setData] = useState([]);

  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMapV2({
        pitch: 35.210526315789465,
        mapStyle: 'amap://styles/grey',
        center: [104.288144, 31.239692],
        zoom: 4.4,
        token: '3f730ff87182dd4ccf1446f014d94592',
      }),
      logoVisible: false,
    });
  }, []);

  return <div id="map" />;
};
export default Map;
