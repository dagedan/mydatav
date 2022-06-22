import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

function CompanyScattered() {
  const data = [
    {
      city: '老寨',
      type: '小树茶',
      value: 14500,
    },
    {
      city: '老寨',
      type: '中树茶',
      value: 8500,
    },
    {
      city: '老寨',
      type: '古树茶',
      value: 10000,
    },
    {
      city: '南迫',
      type: '小树茶',
      value: 9000,
    },
    {
      city: '南迫',
      type: '中树茶',
      value: 8500,
    },
    {
      city: '南迫',
      type: '古树茶',
      value: 11000,
    },
    {
      city: '坝歪',
      type: '小树茶',
      value: 16000,
    },
    {
      city: '坝歪',
      type: '中树茶',
      value: 5000,
    },
    {
      city: '坝歪',
      type: '古树茶',
      value: 6000,
    },
    {
      city: '地界',
      type: '小树茶',
      value: 14000,
    },
    {
      city: '地界',
      type: '中树茶',
      value: 9000,
    },
    {
      city: '地界',
      type: '古树茶',
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
  };

  return (
    <div style={{ height: 210 }}>
      <Column {...config} />
    </div>
  );
}

export default CompanyScattered;
