import { isInsidePolygon, map, mapValues, isString } from '../../utils';

// It could have been a tuple [number, number] but keep it like an object to
// be consistent with the map I created in https://jsfiddle.net/k785fL0c/1/
export interface Coordinate {
  latitude: number | string;
  longitude: number | string;
}

type Region = Coordinate[];

type RegionName = 'west' | 'midwest' | 'northeast' | 'south';

/**
 * US regions approximation
 * @constant
 *
 * @see https://www.worldatlas.com/articles/the-officially-recognized-four-regions-and-nine-divisions-of-the-united-states.html
 * @see https://jsfiddle.net/k785fL0c/1/
 */
const US_REGIONS: Readonly<Record<RegionName, Region>> = Object.freeze({
  west: [
    { latitude: 48.97218, longitude: -125.700957 },
    { latitude: 48.97218, longitude: -104.0527 },
    { latitude: 40.963156, longitude: -104.0527 },
    { latitude: 40.963156, longitude: -102.059006 },
    { latitude: 36.953414, longitude: -102.059006 },
    { latitude: 36.953414, longitude: -102.984974 },
    { latitude: 36.953414, longitude: -103.177502 },
    { latitude: 32.369518, longitude: -117.10205 },
    { latitude: 39.496935, longitude: -124.181533 },
    { latitude: 48.97218, longitude: -125.700957 },
  ],
  midwest: [
    { latitude: 48.97218, longitude: -104.0527 },
    { latitude: 48.383823, longitude: -88.315275 },
    { latitude: 42.261258, longitude: -79.782388 },
    { latitude: 39.713667, longitude: -80.485648 },
    { latitude: 36.953414, longitude: -89.721795 },
    { latitude: 36.953414, longitude: -102.059006 },
    { latitude: 40.963156, longitude: -102.059006 },
    { latitude: 40.963156, longitude: -104.0527 },
    { latitude: 48.97218, longitude: -104.0527 },
  ],
  northeast: [
    { latitude: 42.261258, longitude: -79.782388 },
    { latitude: 47.186827, longitude: -68.811532 },
    { latitude: 44.6766, longitude: -66.842404 },
    { latitude: 39.713667, longitude: -74.250076 },
    { latitude: 39.713667, longitude: -80.485648 },
    { latitude: 42.261258, longitude: -79.782388 },
  ],
  south: [
    { latitude: 32.369518, longitude: -117.10205 },
    { latitude: 36.953414, longitude: -103.177502 },
    { latitude: 36.953414, longitude: -102.984974 },
    { latitude: 36.953414, longitude: -102.059006 },
    { latitude: 36.953414, longitude: -89.721795 },
    { latitude: 39.713667, longitude: -80.485648 },
    { latitude: 39.713667, longitude: -74.250076 },
    { latitude: 34.790877, longitude: -76.453624 },
    { latitude: 30.859404, longitude: -81.575442 },
    { latitude: 25.636164, longitude: -79.817629 },
    { latitude: 25.15979, longitude: -81.179934 },
    { latitude: 29.721057, longitude: -83.509035 },
    { latitude: 29.338691, longitude: -94.80298 },
    { latitude: 25.992204, longitude: -97.176027 },
    { latitude: 29.797357, longitude: -101.746339 },
    { latitude: 29.262044, longitude: -103.855714 },
    { latitude: 31.273467, longitude: -105.921143 },
    { latitude: 32.369518, longitude: -117.10205 },
  ],
});

const toPoint = ({ latitude, longitude }: Coordinate) => ({
  x: isString(latitude) ? parseFloat(latitude) : latitude,
  y: isString(longitude) ? parseFloat(longitude) : longitude,
});

const toPolygon = map(toPoint);

const usRegionsPolygons = mapValues(toPolygon)(US_REGIONS);

/**
 * Returns the US Region (west, midwest, northeast, south) given a coordinate
 * `undefined` if the coordinate is not inside any of the US regions
 *
 * @example
 *  findUSRegion({ latitude: 44.711201, longitude: -115.191289 }) // -> 'west"
 *
 * @param {Object} coordinate The coordinate to check
 * @returns {string|undefined} The US Region or `undefined`.
 */
const findUSRegion = (coordinate: Coordinate): RegionName | undefined => {
  for (const regionName in usRegionsPolygons) {
    const regionPolygon = usRegionsPolygons[regionName];
    if (isInsidePolygon(regionPolygon)(toPoint(coordinate))) {
      return regionName as RegionName;
    }
  }
};

export default findUSRegion;
