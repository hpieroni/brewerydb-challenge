import { groupByProp, mapValues, pipe, sortByProp } from '../../../utils';
import { Brewery } from '../types';

/**
 * Group the breweries together by state and then sort them by `createdAt`
 * so the most recent ones come first.
 */
const groupByStateAndSortByCreatedAt = pipe(
  groupByProp<Brewery>('state'),
  mapValues(sortByProp('createdAt', 'desc'))
);

export default groupByStateAndSortByCreatedAt;
