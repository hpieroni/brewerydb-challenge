import etl from './breweries';

const rawBreweries = [
  {
    id: 9094,
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
];

const expectedOutput = [
  {
    id: 9094,
    obdbId: 'bnaf-llc-austin',
    name: 'Bnaf, LLC',
    breweryType: 'planning',
    city: 'Austin',
    state: 'Texas',
    postalCode: '78727-7602',
    country: 'United States',
    updatedAt: '2018-07-24T00:00:00.000Z',
    createdAt: '2017-07-24T00:00:00.000Z',
  },
];

describe('`capitalize` function', () => {
  test('should return an empty string if input is ``', () => {
    expect(etl(rawBreweries)).toEqual(expectedOutput);
  });
});
