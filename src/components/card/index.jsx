import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import Styles from './index.less';

export default function Index({ label, value, prefix, style }) {
  return (
    <div className={Styles.card} style={style}>
      <div className={Styles.label}>{label}</div>
      <div className={Styles.value}>
        {prefix}
        <CountUp
          start={0}
          end={value}
          duration={1}
          useGrouping={true}
          separator=","
        />
      </div>
    </div>
  );
}
