/**
 * ETL class that performs extract, transform and load operations.
 */
abstract class ETL<RawData, TransformedData> {
  protected abstract extract(): Promise<RawData>;
  protected abstract transform(data: RawData): Promise<TransformedData>;
  protected abstract load(data: TransformedData): Promise<void>;

  public async run(): Promise<void> {
    const rawData = await this.extract();
    const transformedData = await this.transform(rawData);
    await this.load(transformedData);
  }
}

export default ETL;
