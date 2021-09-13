import {
  filter,
  groupByProp,
  isNil,
  map,
  mapKeys,
  mapValues,
  pipe,
  removeNulls,
  snakeToCamel,
  sortByProp,
} from '../utils';
import {
  RawBrewery,
  Brewery,
  GroupedBreweries,
  RegionalizedBrewery,
  GroupedRegionalizedBrewery,
} from './types';
import { Nullable } from '../utils/types';
import findUSRegion, { Coordinate } from './findUSRegion';

const hasCoordinates = ({ latitude, longitude }: Nullable<Coordinate>) =>
  !isNil(latitude) && !isNil(longitude);

const filterGeolocalized = filter<Brewery>(hasCoordinates);

const addRegion = map<Brewery, RegionalizedBrewery>(brewery => ({
  ...brewery,
  region: findUSRegion({
    latitude: brewery.latitude as string,
    longitude: brewery.longitude as string,
  }),
}));

const filterGeolocalizedAndRegionalize = pipe(filterGeolocalized, addRegion);

const removeAllNullProperties = map<RawBrewery, RawBrewery>(removeNulls);

const convertObjectKeysToCamelCase = map<RawBrewery, Brewery>(
  mapKeys(snakeToCamel)
);

const groupByStateAndSortByCreatedAt = pipe(
  groupByProp<Brewery>('state'),
  mapValues<GroupedBreweries, Brewery[]>(sortByProp('createdAt', 'desc'))
);

const filterGeolocalizedAndRegionalizeGroups = mapValues(
  filterGeolocalizedAndRegionalize
);

function etl(rawBreweries: RawBrewery[]): GroupedRegionalizedBrewery {
  const pipeline = pipe(
    removeAllNullProperties,
    convertObjectKeysToCamelCase,
    groupByStateAndSortByCreatedAt,
    filterGeolocalizedAndRegionalizeGroups
  );
  return pipeline(rawBreweries);
}

// steps files
export const pipeline = pipe(
  removeAllNullProperties,
  convertObjectKeysToCamelCase,
  groupByStateAndSortByCreatedAt,
  filterGeolocalizedAndRegionalizeGroups
);

export default etl;
