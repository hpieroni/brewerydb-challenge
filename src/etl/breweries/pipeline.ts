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
} from '../../utils';
import {
  RawBrewery,
  Brewery,
  GroupedBreweries,
  RegionalizedBrewery,
  GroupedRegionalizedBrewery,
} from './types';
import { Nullable } from '../../utils/types';
import findUSRegion, { Coordinate } from './findUSRegion';

// Step 1
const removeAllNullProperties = map<RawBrewery, RawBrewery>(removeNulls);

// Step 2
const convertObjectKeysToCamelCase = map<RawBrewery, Brewery>(
  mapKeys(snakeToCamel)
);

// Step 3
const groupByStateAndSortByCreatedAt = pipe(
  groupByProp<Brewery>('state'),
  mapValues<GroupedBreweries, Brewery[]>(sortByProp('createdAt', 'desc'))
);

// Step 4
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

const filterGeolocalizedAndRegionalizeGroups = mapValues(
  filterGeolocalizedAndRegionalize
);

// Pipeline
export const pipeline = pipe(
  removeAllNullProperties,
  convertObjectKeysToCamelCase,
  groupByStateAndSortByCreatedAt,
  filterGeolocalizedAndRegionalizeGroups
);

export default pipeline;
