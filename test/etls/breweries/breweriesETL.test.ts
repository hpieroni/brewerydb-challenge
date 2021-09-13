import axios from 'axios';
import BreweriesETL from '../../../src/etls/breweries/breweriesETL';
import { RawBrewery } from '../../../src/etls/breweries/types';

jest.mock('axios');

const rawBreweries: RawBrewery[] = [
  {
    id: 1,
    obdb_id: 'bnaf-llc-austin',
    name: 'Bnaf, LLC',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Austin',
    state: 'Texas',
    county_province: null,
    postal_code: '78727-7602',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2017-07-24T00:00:00.000Z',
  },
  {
    id: 2,
    obdb_id: 'clermont-brewing-company-clermont',
    name: 'Clermont Brewing Company',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Clermont',
    state: 'Florida',
    county_province: null,
    postal_code: '34711-2108',
    country: 'United States',
    longitude: '-83.254258',
    latitude: '30.133335',
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 3,
    obdb_id: 'king-fox-brewery-hialeah',
    name: 'King Fox Brewery',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Hialeah',
    state: 'Florida',
    county_province: null,
    postal_code: '33014-5231',
    country: 'United States',
    longitude: '-81.399649',
    latitude: '27.153684',
    phone: null,
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2020-07-24T00:00:00.000Z',
  },
];

const expectedOutput = {
  Texas: [],
  Florida: [
    {
      id: 3,
      obdbId: 'king-fox-brewery-hialeah',
      name: 'King Fox Brewery',
      breweryType: 'planning',
      city: 'Hialeah',
      state: 'Florida',
      postalCode: '33014-5231',
      country: 'United States',
      longitude: '-81.399649',
      latitude: '27.153684',
      region: 'south',
      updatedAt: '2018-08-11T00:00:00.000Z',
      createdAt: '2020-07-24T00:00:00.000Z',
    },
    {
      id: 2,
      obdbId: 'clermont-brewing-company-clermont',
      name: 'Clermont Brewing Company',
      breweryType: 'planning',
      city: 'Clermont',
      state: 'Florida',
      postalCode: '34711-2108',
      country: 'United States',
      longitude: '-83.254258',
      latitude: '30.133335',
      region: 'south',
      updatedAt: '2018-08-11T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z',
    },
  ],
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Brewevery ETL', () => {
  test('should return users list', async () => {
    const res = {
      json: jest.fn().mockImplementation(data => data),
    } as any;

    const context = { res };

    mockedAxios.get.mockResolvedValue({
      data: rawBreweries,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    await new BreweriesETL(context).run();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(expectedOutput);
  });
});
