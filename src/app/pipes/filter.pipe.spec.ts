import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter arrays by skill category', () => {
    const items = [
      { id: 1, name: 'Angular', category: 'Framework' },
      { id: 2, name: 'JavaScript', category: 'Language' },
      { id: 3, name: 'Vue', category: 'Framework' },
    ];

    const result = pipe.transform(items, 'category', 'Framework');
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { id: 1, name: 'Angular', category: 'Framework' },
      { id: 3, name: 'Vue', category: 'Framework' },
    ]);
  });

  it('returns the original array if no filter key or value is provided', () => {
    const items = [
      { id: 1, name: 'Angular', category: 'Framework' },
      { id: 2, name: 'React', category: 'Library' },
    ];
    const result = pipe.transform(items, '', '');
    expect(result.length).toBe(2);
    expect(result).toEqual(items);
  });

  it('returns an empty array when input is undefined', () => {
    const items = undefined;
    const result = pipe.transform(items || [], 'category', 'Framework');
    expect(result).toEqual([]);
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
