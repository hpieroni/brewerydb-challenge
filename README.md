# brewerydb-etl-exercise

REST API with a single `/breweries` endpoint that returns a list of breweries in the United States using `Node + Express + TypeScript + Passport + Jest` stack.

## Requirements

Using the above tech stack, write a REST API with a single `/breweries` endpoint that returns a list of breweries in the United States. The `/breweries` endpoint of your API should be tested with `Jest` and secured using `Passport`. In addition to fetching this data directly from the data source above, this endpoint should function as an ETL data pipeline where you process the data in the following ways:

1. **Step 1:** Remove any attributes that are null from the data
2. **Step 2**: Convert the keys of the objects in the response from snake case to camel case (e.g. “postal_code” -> “postalCode”)
3. **Step 3:** Group the breweries together by state and then sort them by created_at so the most recent ones come first.
4. **Step 4:** Add an attribute to each brewery called region that adds the correct region to each brewery based on this map: https://www.worldatlas.com/articles/the-regions-of-the-united-states.html (hint - take a look at the GPS coordinates for the United States and then use the longitude & latitude attributes for each brewery to compute this). If the brewery does not have a longitude & latitude then filter it out.

Don't use `lodash/underscore/rambda` or any other helper libraries.

## Prerequisites

### Node.js

Install the latest LTS [Node.js](https://nodejs.org/en/download/) version. If you are using [nvm](https://github.com/nvm-sh/nvm) you can just run `nvm install` in the root folder.

## Clone repo and install dependencies

1. `git clone https://github.com/hpieroni/brewerydb-etl-exercise.git`
2. `cd brewerydb-etl-exercise`
3. `npm install`

## Start API

In order to start the API you need to configure some ENV variables first. You can do this through an **.env** file (check [.env.example](https://github.com/hpieroni/brewerydb-etl-exercise/blob/master/.env.example) ).

| Variable | Default | Description                       |
| :------- | :-----: | :-------------------------------- |
| PORT     |  3000   | Port where the server will listen |
| TOKEN    |         | Authentication token              |

Finally run `npm start` and check the console for a message similar to:

```
App is listening at http://localhost:3000 !
```

Now you should be able to call:

```bash
curl -i -H "Content-Type: application/json" \
 -H "Authorization: Bearer test" \
 http://localhost:3000/breweries
```

and get a response similar to:

```json
{
  "Texas": [],
  "Colorado": [
    {
      "id": 9180,
      "obdbId": "boulder-beer-co-boulder",
      "name": "Boulder Beer Co",
      "breweryType": "regional",
      "street": "2880 Wilderness Pl",
      "city": "Boulder",
      "state": "Colorado",
      "postalCode": "80301-5401",
      "country": "United States",
      "longitude": "-105.2480158",
      "latitude": "40.026439",
      "updatedAt": "2018-08-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z",
      "region": "west"
    }
  ],
  "Florida": [],
  "Iowa": [],
  "Louisiana": [],
  "California": [],
  "Pennsylvania": [
    {
      "id": 11039,
      "obdbId": "goose-island-philadelphia-philadelphia",
      "name": "Goose Island Philadelphia",
      "breweryType": "brewpub",
      "street": "1002 Canal St",
      "city": "Philadelphia",
      "state": "Pennsylvania",
      "postalCode": "19123",
      "country": "United States",
      "longitude": "-75.13506341",
      "latitude": "39.9648491",
      "updatedAt": "2018-08-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z",
      "region": "northeast"
    }
  ],
  "Georgia": [],
  "Michigan": [
    {
      "id": 11767,
      "obdbId": "ironbark-brewery-jackson",
      "name": "Ironbark Brewery",
      "breweryType": "micro",
      "street": "2610 Kibby Rd",
      "city": "Jackson",
      "state": "Michigan",
      "postalCode": "49203-4908",
      "country": "United States",
      "longitude": "-84.43762976",
      "latitude": "42.2188971",
      "phone": "5177487988",
      "updatedAt": "2018-08-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z",
      "region": "midwest"
    }
  ],
  "Virginia": [],
  "New Hampshire": [],
  "Maryland": [],
  "Ohio": []
}
```

## Tests

- `npm run test` _runs the test suit_
- `npm run test:coverage` _displays a test coverage report_

## Solution

I decided to follow a functional approach because of the nature of the data pipeline. I created some utility functions on that regard.

The `BreweryETL` class has the methods (`extract`, `transform` and `load`). The `transform` method is implemented by composing functions. If you want to add a new step to the pipeline, you need to add it there.

You can also create other ETLs following the same patterns. In this example, I've only created a `breweries` etl.

### Authentication

I used `passport-http-bearer` but, to make it simple, I only check for the token configured in `.env` file.

### Find US Regions

In order to find the US region given a coordinate I used a `ray casting algorithm` where I manually created an aproximatino of the regions with polygons (sorry Alaska for leaving you out). You can see the jsfiddle https://jsfiddle.net/k785fL0c/1/ I created.

![image](https://user-images.githubusercontent.com/5157313/133158152-5526f233-75c2-466a-9026-3c1e1ab19279.png)

## TODO

- [ ] Implement `curry` function and use it in utility functions.
