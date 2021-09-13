import { map, mapKeys, snakeToCamel } from '../../../utils';
import { RawBrewery, Brewery } from '../types';

/**
 * Convert the keys of the objects in the response from snake case to camel case
 * (e.g. “postal_code” -> “postalCode”)
 */
export const convertObjectKeysToCamelCase = map<RawBrewery, Brewery>(
  mapKeys(snakeToCamel)
);

export default convertObjectKeysToCamelCase;
