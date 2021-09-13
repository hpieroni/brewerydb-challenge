import findUSRegion from '../../../src/etl/breweries/findUSRegion';

describe('`findUSRegion` function', () => {
  test('should return the US region given a coordinate', () => {
    const idahoCoordinate = { latitude: 44.711201, longitude: -115.191289 };
    expect(findUSRegion(idahoCoordinate)).toEqual('west');

    const iowaCoordinate = { latitude: 42.128716, longitude: -94.928282 };
    expect(findUSRegion(iowaCoordinate)).toEqual('midwest');

    const newYorkCoordinate = { latitude: 42.550989, longitude: -75.284729 };
    expect(findUSRegion(newYorkCoordinate)).toEqual('northeast');

    const floridaCoordinate = { latitude: 30.133335, longitude: -83.254258 };
    expect(findUSRegion(floridaCoordinate)).toEqual('south');
  });

  test('should return `undefined` if the coordinate is not from the US', () => {
    const mexicoCoordinate = { latitude: 25.421696, longitude: -102.795576 };
    expect(findUSRegion(mexicoCoordinate)).toBeUndefined();
  });
});
