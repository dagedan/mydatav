import { useState, useEffect } from 'react';
import styles from './index.less';
import customTheme from './theme';
// import { G2 } from '@antv/g2plot';
import _ from 'lodash';
import { useSetState, useSize } from 'ahooks';
// import { Col, Row } from 'antd';
// import { Area } from '@antv/g2plot';
import { Title, Map, Liquid, Colum } from '../components';

interface State {
  transForm: string;
  width: number;
  height: number;
  [key: string]: any;
}

export default function IndexPage() {
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
  };
  useEffect(() => {
    setScale();
  }, []);
  useEffect(() => {
    window.onresize = _.debounce(setScale, 1000);
    return () => {
      window.onresize = () => {};
    };
  });
  return (
    <div
      className={styles.container}
      style={{
        width: state.width,
        height: state.height,
        transform: state.transForm,
      }}
    >
      <Map></Map>
      <div className={styles.header}></div>
    </div>
  );
}
