import isInsidePolygon from './isInsidePolygon';

describe('`isInsidePolygon` function', () => {
  const square = [
    { x: 0, y: 0 },
    { x: 20, y: 0 },
    { x: 20, y: 20 },
    { x: 0, y: 20 },
  ];
  const squareHole = [
    { x: 0, y: 0 },
    { x: 20, y: 0 },
    { x: 20, y: 20 },
    { x: 0, y: 20 },
    { x: 5, y: 5 },
    { x: 15, y: 5 },
    { x: 15, y: 15 },
    { x: 5, y: 15 },
  ];
  const strange = [
    { x: 0, y: 0 },
    { x: 5, y: 5 },
    { x: 0, y: 20 },
    { x: 5, y: 15 },
    { x: 15, y: 15 },
    { x: 20, y: 20 },
    { x: 20, y: 0 },
  ];
  const hexagon = [
    { x: 6, y: 0 },
    { x: 14, y: 0 },
    { x: 20, y: 10 },
    { x: 14, y: 20 },
    { x: 6, y: 20 },
    { x: 0, y: 10 },
  ];

  const testPoints = [
    { x: 10, y: 10 },
    { x: 10, y: 16 },
    { x: -20, y: 10 },
    { x: 0, y: 10 },
    { x: 20, y: 10 },
    { x: 16, y: 10 },
    { x: 20, y: 20 },
  ];

  test('should determine if a given point is inside a polygon', () => {
    // square
    const isInsideSquare = isInsidePolygon(square);
    expect(isInsideSquare(testPoints[0])).toBe(true);
    expect(isInsideSquare(testPoints[1])).toBe(true);
    expect(isInsideSquare(testPoints[2])).toBe(false);
    expect(isInsideSquare(testPoints[3])).toBe(true);
    expect(isInsideSquare(testPoints[4])).toBe(false);
    expect(isInsideSquare(testPoints[5])).toBe(true);
    expect(isInsideSquare(testPoints[6])).toBe(false);

    // squareHole
    const isInsideSquareHole = isInsidePolygon(squareHole);
    expect(isInsideSquareHole(testPoints[0])).toBe(false);
    expect(isInsideSquareHole(testPoints[1])).toBe(true);
    expect(isInsideSquareHole(testPoints[2])).toBe(false);
    expect(isInsideSquareHole(testPoints[3])).toBe(false);
    expect(isInsideSquareHole(testPoints[4])).toBe(false);
    expect(isInsideSquareHole(testPoints[5])).toBe(true);
    expect(isInsideSquareHole(testPoints[6])).toBe(false);

    // strange
    const isInsideStrange = isInsidePolygon(strange);
    expect(isInsideStrange(testPoints[0])).toBe(true);
    expect(isInsideStrange(testPoints[1])).toBe(false);
    expect(isInsideStrange(testPoints[2])).toBe(false);
    expect(isInsideStrange(testPoints[3])).toBe(false);
    expect(isInsideStrange(testPoints[4])).toBe(false);
    expect(isInsideStrange(testPoints[5])).toBe(true);
    expect(isInsideStrange(testPoints[6])).toBe(false);

    // hexagon
    const isInsideHexagon = isInsidePolygon(hexagon);
    expect(isInsideHexagon(testPoints[0])).toBe(true);
    expect(isInsideHexagon(testPoints[1])).toBe(true);
    expect(isInsideHexagon(testPoints[2])).toBe(false);
    expect(isInsideHexagon(testPoints[3])).toBe(true);
    expect(isInsideHexagon(testPoints[4])).toBe(false);
    expect(isInsideHexagon(testPoints[5])).toBe(true);
    expect(isInsideHexagon(testPoints[6])).toBe(false);
  });
});
