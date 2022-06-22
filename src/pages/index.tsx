import { useState, useEffect } from 'react';
import styles from './index.less';
import customTheme from './theme';
import _ from 'lodash';
import { useSetState, useSize } from 'ahooks';
import {
  Title,
  Map,
  TotalOutput,
  NumberCard,
  SaleRanking,
  CompanyScattered,
  ProducingAreaScattered,
} from '../components';
import { p2 } from '../data/commonData';

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
      <div className={styles.header}>双江县茶产业概况</div>
      <Map></Map>
      <div className={styles.left}>
        <div className={styles.leftBg}>
          <div className={styles.i}>
            <Title
              labelMain="成品茶总产量(万吨)"
              labelSub="近3年成品茶总产量走势"
            ></Title>
            <TotalOutput></TotalOutput>
          </div>
          <div className={styles.i}>
            <Title
              labelMain="树龄茶产量(万吨)"
              labelSub="近3年成品茶树龄茶产量走势"
            ></Title>
            <TotalOutput></TotalOutput>
          </div>
          <div className={styles.i}>
            <Title
              labelMain="季节茶产量(万吨)"
              labelSub="近3年季节茶产量走势"
            ></Title>
            <TotalOutput></TotalOutput>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightBg}>
          <div className={styles.i}>
            <Title labelMain="茶企产销量排行" labelSub="茶企产销量Top5"></Title>
            <SaleRanking
              data={p2}
              mainColor={
                'linear-gradient(180.01deg, #21DBA3 0.01%, rgba(33, 219, 163, 0.5) 99.99%)'
              }
              style={{ marginTop: 25 }}
            />
          </div>
          <div className={styles.i}>
            <Title
              labelMain="茶产业从业企业分部"
              labelSub="双江县境内茶企区域分部"
            ></Title>
            <CompanyScattered></CompanyScattered>
          </div>
          <div className={styles.i}>
            <Title
              labelMain="主产区分部"
              labelSub="小茶树/中茶树/古茶树核心产区分部"
            ></Title>
            <ProducingAreaScattered></ProducingAreaScattered>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomI}>
          <NumberCard
            label={'2022总产量(吨)'}
            value={18000}
            style={{ flex: 1 }}
          ></NumberCard>
        </div>
        <div className={styles.bottomI}>
          <NumberCard
            label={'茶企业数量(家)'}
            value={3000}
            style={{ flex: 1 }}
          ></NumberCard>
        </div>
        <div className={styles.bottomI}>
          <NumberCard
            label={'茶叶株数(株)'}
            value={17389}
            style={{ flex: 1 }}
          ></NumberCard>
        </div>
        <div className={styles.bottomI}>
          <NumberCard
            label={'茶园数量(个)'}
            value={5019}
            style={{ flex: 1 }}
          ></NumberCard>
        </div>
      </div>
    </div>
  );
}
