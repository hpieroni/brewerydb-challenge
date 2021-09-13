import { map, removeNulls } from '../../../utils';
import { RawBrewery } from '../types';

/**
 * Remove any attributes that are null from the data
 */
const removeAllNullProperties = map<RawBrewery, RawBrewery>(removeNulls);

export default removeAllNullProperties;
