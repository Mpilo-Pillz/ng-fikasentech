import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter items based on filterKey and filterValue', () => {
    const items = [
      { name: 'Thulani', age: 25 },
      { name: 'Lindelwa', age: 30 },
      { name: 'Sihle', age: 35 },
    ];

    const filterKey = 'name';
    const filterValue = 'Thulani';

    const result = pipe.transform(items, filterKey, filterValue);

    expect(result).toEqual([{ name: 'Thulani', age: 25 }]);
  });

  it('should return an empty array if no items match the filter', () => {
    const items = [
      { name: 'Thulani', age: 25 },
      { name: 'Lindelwa', age: 30 },
      { name: 'Sihle', age: 35 },
    ];

    const filterKey = 'name';
    const filterValue = 'Akhile';

    const result = pipe.transform(items, filterKey, filterValue);

    expect(result).toEqual([]);
  });
});
