import React, { memo, useEffect, Fragment } from 'react';
import { LarkMap, PolygonLayer, TextLayer, LineLayer } from '@antv/larkmap';
import areaData from '../../data/area.json';
import points from '../../data/points';
import {
  mapConfig,
  layerOptionsPolygonLayer,
  layerOptionsTextLayer,
  layerOptionsLineLayerDown,
  layerOptionsLineLayerUp,
} from './mapLayerConfig';

const polygonData = {
  data: areaData,
  parser: { type: 'geojson' },
};
const pointData = {
  data: points,
  parser: {
    type: 'json',
    x: 'lng',
    y: 'lat',
  },
};

const source = {
  data: areaData,
  parser: { type: 'geojson' },
};

const Map = () => {
  useEffect(() => {}, []);
  const onLayerCreated = (layer: any) => {
    layer.on('mousedown', (e) => {
      console.log('====================================');
      console.log(e.feature.properties.name);
      console.log('====================================');
    });
  };
  return (
    <>
      <LarkMap {...mapConfig}>
        <PolygonLayer
          {...layerOptionsPolygonLayer}
          source={polygonData}
          onCreated={onLayerCreated}
        />
        <TextLayer {...layerOptionsTextLayer} source={pointData} />
        <LineLayer {...layerOptionsLineLayerDown} source={polygonData} />
      </LarkMap>
    </>
  );
};
export default memo(Map);
