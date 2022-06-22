export const layerOptionsPolygonLayer = {
  autoFit: true,
  shape: 'fill',
  zIndex: 100,
  size: 8,
  color: {
    field: 'name',
    value: ({ name }: any) => {
      switch (name) {
        case '邦丙乡':
          return 'rgb(239,243,255)';
        case '忙糯乡':
          return 'rgb(189,215,231)';
        case '大文乡':
          return 'rgb(107,174,214)';
        case '勐库镇':
          return 'rgb(239,243,255)';
        case '勐勐镇':
          return 'rgb(49,130,189)';
        case '沙河乡':
          return 'rgb(8,81,156)';
        default:
          return 'rgb(8,81,156)';
      }
    },
  },
  state: {
    active: true,
  },
};

export const mapConfig = {
  mapType: 'GaodeV2',
  mapOptions: {
    pitch: 30,
    mapStyle: 'amap://styles/grey',
    center: [99.828225, 23.402719],
    zoom: 8,
    token: '3f730ff87182dd4ccf1446f014d94592',
  },
};

export const layerOptionsTextLayer = {
  field: 'name',
  zIndex: 101,
  style: {
    fill: 'red',
    opacity: 1,
    fontSize: 22,
    stroke: '#fff',
    strokeWidth: 2,
    textAllowOverlap: false,
    padding: [5, 5],
  },
};
export const layerOptionsLineLayerDown = {
  shape: 'wall',
  size: 2000,
  zIndex: 100,
  style: {
    heightfixed: true,
    opacity: 0.6,
    sourceColor: '#0DCCFF',
    targetColor: 'rbga(255,255,255, 0)',
  },
};
