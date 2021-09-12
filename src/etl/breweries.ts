import {
  groupByProp,
  map,
  mapKeys,
  mapValues,
  pipe,
  removeNulls,
  snakeToCamel,
  sortByProp,
} from '../utils';
import { SnakeToCamelKeys } from '../utils/types';

type RawBrewery = {
  id: number;
  obdb_id: string;
  name: string;
  brewery_type: string;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string | null;
  state: string;
  county_province: string | null;
  postal_code: string | null;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  updated_at: string;
  created_at: string;
};

type Brewery = SnakeToCamelKeys<RawBrewery>;
type GroupedBreweries = Record<string, Brewery[]>;

const removeNullPropertiesFromObjects = map<RawBrewery, RawBrewery>(
  removeNulls
);

const transformObjectKeysToCamelCase = map<RawBrewery, Brewery>(
  mapKeys(snakeToCamel)
);

const groupByStateAndSortByCreatedAt = pipe(
  groupByProp<Brewery>('state'),
  mapValues<GroupedBreweries, Brewery[]>(sortByProp('createdAt', 'desc'))
);

function etl(rawBreweries: RawBrewery[]): GroupedBreweries {
  const pipeline = pipe(
    removeNullPropertiesFromObjects,
    transformObjectKeysToCamelCase,
    groupByStateAndSortByCreatedAt
  );
  return pipeline(rawBreweries);
}

export default etl;
