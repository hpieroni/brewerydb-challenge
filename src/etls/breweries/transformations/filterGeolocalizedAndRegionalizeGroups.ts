import { filter, isNil, map, mapValues, pipe } from '../../../utils';
import { Nullable } from '../../../utils/types';
import { Brewery, RegionalizedBrewery } from '../types';
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

/*
 * Add an attribute to each brewery called region that adds the correct US region to each brewery using coordinates.
 * If the brewery does not have a longitude & latitude then filter it out.
 */
const filterGeolocalizedAndRegionalizeGroups = mapValues(
  filterGeolocalizedAndRegionalize
);

export default filterGeolocalizedAndRegionalizeGroups;
