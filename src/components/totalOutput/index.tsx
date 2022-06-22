import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const TotalOutputChart = () => {
  const data = [
    { type: '2020年1月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年2月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年3月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年4月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年5月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年6月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年7月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年8月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年9月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年10月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年11月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2020年12月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年1月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年2月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年3月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年4月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年5月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年6月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年7月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年8月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年9月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年10月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年11月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2021年12月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2022年1月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2022年2月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2022年3月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2022年4月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2022年5月', sales: parseInt(Math.random() * 100 + '') },
    { type: '2022年6月', sales: parseInt(Math.random() * 100 + '') },
  ];
  const config = {
    data,
    autoFit: true,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '月份',
      },
      sales: {
        alias: '产量',
      },
    },
  };
  return (
    <div style={{ height: 200 }}>
      <Area {...config} />
    </div>
  );
};
export default TotalOutputChart;
