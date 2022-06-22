import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

function CompanyScattered() {
  const data = [
    {
      city: '老寨',
      type: '私有企业',
      value: 14500,
    },
    {
      city: '老寨',
      type: '独资企业',
      value: 8500,
    },
    {
      city: '老寨',
      type: '股份制企业',
      value: 10000,
    },
    {
      city: '南迫',
      type: '私有企业',
      value: 9000,
    },
    {
      city: '南迫',
      type: '独资企业',
      value: 8500,
    },
    {
      city: '南迫',
      type: '股份制企业',
      value: 11000,
    },
    {
      city: '坝歪',
      type: '私有企业',
      value: 16000,
    },
    {
      city: '坝歪',
      type: '独资企业',
      value: 5000,
    },
    {
      city: '坝歪',
      type: '股份制企业',
      value: 6000,
    },
    {
      city: '地界',
      type: '私有企业',
      value: 14000,
    },
    {
      city: '地界',
      type: '独资企业',
      value: 9000,
    },
    {
      city: '地界',
      type: '股份制企业',
      value: 10000,
    },
  ];
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
    yAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
      grid: {
        line: { style: { stroke: '#ddd', lineWidth: 0.2, opacity: 0.6 } },
      },
    },
    // colorField: 'type',
    // color: ['#22f2ff', '#005f66', '#009da8'],
  };

  return (
    <div style={{ height: 210 }}>
      <Column {...config} />
    </div>
  );
}

export default CompanyScattered;
