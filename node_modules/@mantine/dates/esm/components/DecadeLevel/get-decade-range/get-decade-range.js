import { getYearsData } from '../../YearsList/get-years-data/get-years-data.js';

function getDecadeRange(decade) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]];
}

export { getDecadeRange };
//# sourceMappingURL=get-decade-range.js.map
