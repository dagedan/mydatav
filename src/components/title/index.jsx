import React from 'react';
import Styles from './index.less';

export default function Index({ labelMain, labelSub, style }) {
  return (
    <div className={Styles.labelMain} style={style}>
      <div className={Styles.titleWrapper}>
        <div className={Styles.prefix}>
          <div className={Styles.dot}></div>
          <div className={Styles.line}></div>
          <div className={Styles.dot}></div>
        </div>
        {labelMain}
      </div>
      {labelSub && <div className={Styles.labelSub}>{labelSub}</div>}
    </div>
  );
}
