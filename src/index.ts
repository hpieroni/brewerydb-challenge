import express, { Application, Request, Response } from 'express';
import { fetchJSON } from './utils';
import { RawBrewery } from './etl/types';
import breweryEtl from './etl/breweries';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.get('/breweries', (req: Request, res: Response) => {
  return fetchJSON<RawBrewery[]>('https://api.openbrewerydb.org/breweries')
    .then(breweryEtl)
    .then(result => res.json(result));
});

app.listen(PORT, function () {
  console.log(`App is listening at http://localhost:${PORT} !`);
});
