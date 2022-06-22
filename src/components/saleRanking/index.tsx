import React, { Fragment } from 'react';
import Styles from './index.less';
import { arseNum } from '@/utils/common';
import CountUp from 'react-countup';

export default function Index({ data, mainColor, style }: any) {
  const totalWidth = 360;
  const total = data
    .map((i: any) => i.count)
    .reduce((a: number, v: number) => {
      return a + v;
    }, 0);

  const count = (value: number) => {
    <CountUp
      start={0}
      end={value}
      duration={1}
      useGrouping={true}
      separator=","
    />;
  };
  const scale = totalWidth / total;
  return (
    <div style={style}>
      {data.map((i: any, index: number) => {
        return (
          <div key={i.name} style={{ marginTop: 10 }}>
            <div style={{ display: 'flex', width: 360 }}>
              <span style={{ flex: 1 }}>{`${index + 1} ${i.name}`}</span>
              <span>{arseNum(i.count)}</span>
            </div>
            <div className={Styles.bar}>
              <div
                style={{
                  background: mainColor,
                  width: scale * i.count,
                  height: 6,
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
