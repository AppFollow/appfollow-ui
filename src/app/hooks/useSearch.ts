import React from 'react';

export interface IResultUseSearch<T> {
  search: string;
  setSearch: (search: string) => void;
  viewList: Array<T>;
}

const defaultGetSearchText = (item: any) => item.text.toLowerCase();

export const useSearch = <T>(
  list: Array<T>,
  getSearch: (item: T) => string = defaultGetSearchText,
): IResultUseSearch<T> => {
  const [search, setSearch] = React.useState('');

  const viewList = React.useMemo(() => {
    const searchLower = search.trim().toLowerCase();

    if (!searchLower) return list;

    return list.filter(item => getSearch(item).includes(searchLower));
  }, [list, search, getSearch]);

  return {
    viewList,
    search,
    setSearch,
  };
};
