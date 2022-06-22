export const ALL_PAGE = {
  HQMain: 'HQ_MAIN',
  HQDetail: 'HQ_DETAIL',
  WDMain: 'WD_MAIN',
  WDDetail: 'WD_DETAIL',
  ZFMain: 'ZF_MAIN',
  ZFDetail: 'ZF_DETAIL',
};

export const arseNum = (num) => {
  var num = num.toString(),
    result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) result = num + result;
  return result;
};
