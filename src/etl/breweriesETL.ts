import { Response } from 'express';
import ETL from './etl';
import { fetchJSON } from '../utils';
import { RawBrewery, GroupedRegionalizedBrewery } from './types';
import { pipeline } from './pipeline';

export class BreveriesETL extends ETL<
  RawBrewery[],
  GroupedRegionalizedBrewery
> {
  constructor(private context: { res: Response }) {
    super();
  }

  protected async extract(): Promise<RawBrewery[]> {
    return fetchJSON<RawBrewery[]>('https://api.openbrewerydb.org/breweries');
  }

  protected async transform(
    data: RawBrewery[]
  ): Promise<GroupedRegionalizedBrewery> {
    return pipeline(data);
  }

  protected async load(
    transformedData: GroupedRegionalizedBrewery
  ): Promise<void> {
    this.context.res.json(transformedData);
  }
}

export default BreveriesETL;
