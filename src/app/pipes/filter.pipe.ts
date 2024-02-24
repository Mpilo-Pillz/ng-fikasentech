import { Pipe, PipeTransform } from '@angular/core';

type Indexable<T> = T & { [key: string]: any };

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform<T>(
    items: Indexable<T>[],
    filterKey: string,
    filterValue: any
  ): T[] {
    if (!items || !filterKey || !filterValue) return items;

    return items.filter((item) => {
      const itemValue = item[filterKey];
      return filterValue ? itemValue === filterValue : true;
    });
  }
}
