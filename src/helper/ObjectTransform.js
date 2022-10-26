import { groupBy } from 'lodash';

export const transform = (data, key) => {
  const grouped = groupBy(data, key);
  const transformed = Object.keys(grouped).map(key => ({
    [key]: grouped[key],
  }));
  return transformed;
};
