import { useState, useEffect } from 'react';
import styles from './index.less';
import customTheme from './theme';
import { G2 } from '@antv/g2plot';
import _ from 'lodash';
import { useSetState, useSize } from 'ahooks';
import { Col, Row } from 'antd';
import { Area } from '@ant-design/plots';
import { Title, Map, Liquid, Colum } from '../components';
import { ChoroplethMap } from '@ant-design/maps';

interface State {
  transForm: string;
  width: number;
  height: number;
  [key: string]: any;
}

export default function IndexPage() {
  G2.registerTheme('custom-theme', customTheme);
  const [data, setData] = useState([]);
  const [state, setState] = useSetState<State>({
    width: 1920,
    height: 1080,
    transForm: 'scale(1) translate(-50%, -50%)',
  });
  const getScale = () => {
    const w = window.innerWidth / state.width;
    const h = window.innerHeight / state.height;
    return w < h ? w : h;
  };
  const setScale = () => {
    setState({ transForm: 'scale(' + getScale() + ') translate(-50%, -50%)' });
    console.log('任你千变万化,我都不会影响性能');
  };
  useEffect(() => {
    window.onresize = _.debounce(setScale, 1000);
    return () => {
      window.onresize = () => {};
    };
  });
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    // autoFit: true,
    // width: 270,
    // height: 200,
    xAxis: {
      range: [0, 1],
      tickCount: 5,
      line: { style: { stroke: '#ddd', lineWidth: 0.4 } },
    },
    yAxis: {
      grid: {
        line: { style: { stroke: '#ddd', lineWidth: 0.1 } },
      },
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#4573f1 1:#4573f1',
      };
    },
  };
  return (
    <div
      className={styles.container}
      style={{
        width: state.width,
        height: state.height,
        transform: state.transForm,
      }}
    >
      <Map config={config}></Map>
    </div>
  );
}
