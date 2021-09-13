import { SnakeToCamelKeys } from '../../utils';

export type RawBrewery = {
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

export type Brewery = SnakeToCamelKeys<RawBrewery>;
export type GroupedBreweries = Record<string, Brewery[]>;
export type RegionalizedBrewery = Brewery & { region?: string };
export type GroupedRegionalizedBreweries = Record<
  string,
  RegionalizedBrewery[]
>;
