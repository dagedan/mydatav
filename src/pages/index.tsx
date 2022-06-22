import { useState, useEffect } from 'react';
import styles from './index.less';
import customTheme from './theme';
import _ from 'lodash';
import { useSetState, useSize } from 'ahooks';
// import { Col, Row } from 'antd';
// import { Area } from '@antv/g2plot';
import { Title, Map, TotalOutput, Card } from '../components';

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
      <div className={styles.header}>{/* 双江县茶产业概况 */}</div>
      <Map></Map>
      <div className={styles.left}>
        <div className={styles.leftBg}>
          <div className={styles.i}>
            <Title
              labelMain="成品茶总产量"
              labelSub="近3年成品茶总产量走势"
            ></Title>
            <TotalOutput></TotalOutput>
          </div>
          <div className={styles.i}>
            <Title
              labelMain="树龄茶产量"
              labelSub="近3年成品茶树龄茶产量走势"
            ></Title>
            <TotalOutput></TotalOutput>
          </div>
          <div className={styles.i}>
            <Title
              labelMain="季节茶产量"
              labelSub="近3年季节茶产量走势"
            ></Title>
            <TotalOutput></TotalOutput>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div style={{ display: 'flex' }}>
          <Card
            label={'2022总产量(吨)'}
            value={18000}
            style={{ flex: 1 }}
          ></Card>
          <Card
            label={'从业企业数量(家)'}
            value={3000}
            style={{ flex: 1 }}
          ></Card>
        </div>
        <div style={{ display: 'flex' }}>
          <Card label={'茶叶株数(吨)'} value={17389} style={{ flex: 1 }}></Card>
          <Card label={'茶园数量'} value={5019} style={{ flex: 1 }}></Card>
        </div>
      </div>
    </div>
  );
}
