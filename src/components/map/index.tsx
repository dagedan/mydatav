import React, { memo, useEffect, useState } from 'react';
import styles from './index.less';
import {
  LarkMap,
  Popup,
  PolygonLayer,
  TextLayer,
  LineLayer,
} from '@antv/larkmap';
import areaData from '../../data/area.json';
import points from '../../data/points';
import {
  mapConfig,
  layerOptionsPolygonLayer,
  layerOptionsTextLayer,
  layerOptionsLineLayerDown,
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
  const [pointInfo, setPointInfo] = useState<any>({
    lng: 120.210792,
    lat: 30.246026,
  });
  const onLayerCreated = (layer: any) => {
    layer.on('mousedown', (e: any) => {
      console.log('====================================');
      console.log(e.feature.properties.name);
      console.log('====================================');
    });
    layer.on('mousemove', (e: any) => {
      const tmpName = e.feature.properties.name;
      if (!tmpName) return;
      const currentArea = points.find((i: any) => i.name == tmpName);
      setPointInfo(currentArea);
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
        <Popup
          lngLat={{ lng: pointInfo.lng, lat: pointInfo.lat }}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom-left"
          className={styles.tootlTip}
        >
          <div className={styles.description}>
            <div style={{ display: 'flex', padding: '10px 0' }}>
              <div className={styles.value}>
                <span className={styles.town}>乡镇：</span> {pointInfo?.name}
              </div>
              <div className={styles.value}>
                <span className={styles.town}>小茶树数量：</span>{' '}
                {pointInfo?.smallTreeCount}
              </div>
            </div>
            <div style={{ display: 'flex', padding: '10px 0' }}>
              <div className={styles.value}>
                <span className={styles.town}>中茶树数量：</span>{' '}
                {pointInfo?.mediumTreeCount}
              </div>
              <div className={styles.value}>
                <span className={styles.town}>古茶树数量：</span>{' '}
                {pointInfo?.bigTreeCount}
              </div>
            </div>
            <div style={{ display: 'flex', padding: '10px 0' }}>
              <div className={styles.value}>
                <span className={styles.town}>茶园数量：</span>{' '}
                {pointInfo?.yardCount}
              </div>
              <div className={styles.value}>
                <span className={styles.town}>从业企业数量：</span>{' '}
                {pointInfo?.companyCount}
              </div>
            </div>
            <div style={{ display: 'flex', padding: '10px 0' }}>
              <div className={styles.value}>
                <span className={styles.town}>产量：</span> {pointInfo?.output}
              </div>
              <div className={styles.value}></div>
            </div>
          </div>
        </Popup>
      </LarkMap>
    </>
  );
};
export default memo(Map);
