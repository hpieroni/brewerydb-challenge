import { removeAllNullProperties } from '../../../../src/etls/breweries/transformations';

const data = [
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
];

const transformedData = [
  {
    id: 1,
    obdb_id: 'bnaf-llc-austin',
    name: 'Bnaf, LLC',
    brewery_type: 'planning',
    city: 'Austin',
    state: 'Texas',
    postal_code: '78727-7602',
    country: 'United States',
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2017-07-24T00:00:00.000Z',
  },
  {
    id: 2,
    obdb_id: 'clermont-brewing-company-clermont',
    name: 'Clermont Brewing Company',
    brewery_type: 'planning',
    city: 'Clermont',
    state: 'Florida',
    postal_code: '34711-2108',
    country: 'United States',
    longitude: '-83.254258',
    latitude: '30.133335',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
];

describe('`removeAllNullProperties` function', () => {
  test('should remove all `null` properties from objects', () => {
    expect(removeAllNullProperties(data)).toEqual(transformedData);
  });
});
