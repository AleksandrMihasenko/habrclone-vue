export const rangeArray = function(start, end) {
  return [...Array(end).keys()].map(item => item + start);
};
