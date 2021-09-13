import { Response } from 'express';
import ETL from '../etl';
import { fetchJSON, pipe } from '../../utils';
import { RawBrewery, GroupedRegionalizedBreweries } from './types';
import {
  removeAllNullProperties,
  convertObjectKeysToCamelCase,
  groupByStateAndSortByCreatedAt,
  filterGeolocalizedAndRegionalizeGroups,
} from './transformations';

export class BreveriesETL extends ETL<
  RawBrewery[],
  GroupedRegionalizedBreweries
> {
  constructor(private context: { res: Response }) {
    super();
  }

  protected async extract(): Promise<RawBrewery[]> {
    return fetchJSON<RawBrewery[]>('https://api.openbrewerydb.org/breweries');
  }

  protected async transform(
    data: RawBrewery[]
  ): Promise<GroupedRegionalizedBreweries> {
    const pipeline = pipe(
      removeAllNullProperties,
      convertObjectKeysToCamelCase,
      groupByStateAndSortByCreatedAt,
      filterGeolocalizedAndRegionalizeGroups
    );
    return pipeline(data);
  }

  protected async load(
    transformedData: GroupedRegionalizedBreweries
  ): Promise<void> {
    this.context.res.json(transformedData);
  }
}

export default BreveriesETL;
