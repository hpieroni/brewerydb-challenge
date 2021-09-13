import { filterGeolocalizedAndRegionalizeGroups } from '../../../../src/etls/breweries/transformations';

const data = {
  Texas: [],
  Florida: [
    {
      id: 2,
      obdbId: 'clermont-brewing-company-clermont',
      name: 'Clermont Brewing Company',
      breweryType: 'planning',
      street: null,
      address2: null,
      address3: null,
      city: 'Clermont',
      state: 'Florida',
      countyProvince: null,
      postalCode: '34711-2108',
      country: 'United States',
      longitude: '-83.254258',
      latitude: '30.133335',
      phone: null,
      websiteUrl: null,
      updatedAt: '2018-08-11T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z',
      region: 'south',
    },
    {
      id: 3,
      obdbId: 'king-fox-brewery-hialeah',
      name: 'King Fox Brewery',
      breweryType: 'planning',
      street: null,
      address2: null,
      address3: null,
      city: 'Hialeah',
      state: 'Florida',
      countyProvince: null,
      postalCode: '33014-5231',
      country: 'United States',
      longitude: '-81.399649',
      latitude: '27.153684',
      phone: null,
      websiteUrl: null,
      updatedAt: '2018-08-11T00:00:00.000Z',
      createdAt: '2020-07-24T00:00:00.000Z',
      region: 'south',
    },
  ],
};

const transformedData = {
  Texas: [],
  Florida: [
    {
      id: 2,
      obdbId: 'clermont-brewing-company-clermont',
      name: 'Clermont Brewing Company',
      breweryType: 'planning',
      street: null,
      address2: null,
      address3: null,
      city: 'Clermont',
      state: 'Florida',
      countyProvince: null,
      postalCode: '34711-2108',
      country: 'United States',
      longitude: '-83.254258',
      latitude: '30.133335',
      phone: null,
      websiteUrl: null,
      updatedAt: '2018-08-11T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z',
      region: 'south',
    },
    {
      id: 3,
      obdbId: 'king-fox-brewery-hialeah',
      name: 'King Fox Brewery',
      breweryType: 'planning',
      street: null,
      address2: null,
      address3: null,
      city: 'Hialeah',
      state: 'Florida',
      countyProvince: null,
      postalCode: '33014-5231',
      country: 'United States',
      longitude: '-81.399649',
      latitude: '27.153684',
      phone: null,
      websiteUrl: null,
      updatedAt: '2018-08-11T00:00:00.000Z',
      createdAt: '2020-07-24T00:00:00.000Z',
      region: 'south',
    },
  ],
};

describe('`filterGeolocalizedAndRegionalizeGroups` function', () => {
  test('should group by `state` and sort by `createdAt` in descending order', () => {
    expect(filterGeolocalizedAndRegionalizeGroups(data)).toEqual(
      transformedData
    );
  });
});
