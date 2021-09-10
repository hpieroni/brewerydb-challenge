import { map, mapKeys, pipe, removeNulls, snakeToCamel } from '../utils';
import { SnakeToCamelKeys } from '../utils/types';

type RawBrewery = {
  id: number;
  obdb_id: string | null;
  name: string | null;
  brewery_type: string | null;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string | null;
  state: string | null;
  county_province: string | null;
  postal_code: string | null;
  country: string | null;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  updated_at: string | null;
  created_at: string | null;
};

type PartialRawBrewery = Partial<RawBrewery>;
type Brewery = SnakeToCamelKeys<PartialRawBrewery>;

// Step 1
const removeNullPropertiesFromObjects = map(removeNulls);
// Step 2
const transformObjectKeysToCamelCase = map(
  mapKeys<PartialRawBrewery, Brewery>(snakeToCamel)
);

function etl(rawBreweries: RawBrewery[]): Brewery[] {
  const pipeline = pipe(
    removeNullPropertiesFromObjects,
    transformObjectKeysToCamelCase
  );

  return pipeline(rawBreweries);
}

export default etl;
