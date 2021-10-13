import curry2 from './curry2';

// Credits to https://rosettacode.org/wiki/Ray-casting_algorithm

interface Point {
  x: number;
  y: number;
}

interface Segment {
  start: Point;
  end: Point;
}

export type Polygon = Point[];

/**
 * Determine if a point is west of a line segment
 *
 * @private
 * @return {boolean} true if (x,y) is west of the line segment connecting A and B
 */
function west(segment: Segment, point: Point): boolean {
  const {
    start: { x: startX, y: startY },
    end: { x: endX, y: endY },
  } = segment;
  const { x, y } = point;

  if (startY > endY) {
    return west({ start: segment.end, end: segment.start }, point);
  }

  if (y <= startY || y > endY || (x >= startX && x >= endX)) {
    return false;
  }

  if (x < startX && x < endX) {
    return true;
  }

  return (y - startY) / (x - startX) > (endY - startY) / (endX - startX);
}

const isOdd = (num: number): boolean => num % 2 !== 0;

/**
 * Given a point and a polygon, check if the point is inside or outside the polygon using the ray-casting algorithm
 *
 * @return {boolean} true if (lng, lat) is in bounds
 */
const isInsidePolygon = (polygon: Polygon, point: Point): boolean => {
  // TODO: extract function and use `pipe` to compose with `isOdd`
  const count = polygon.reduce((acc, polygonPoint, index) => {
    const segment: Segment = {
      start: polygonPoint,
      end: polygon[(index + 1) % polygon.length], // next point of polygon (or first point if last point of polygon)
    };
    return west(segment, point) ? acc + 1 : acc;
  }, 0);

  return isOdd(count);
};

export default curry2(isInsidePolygon);
