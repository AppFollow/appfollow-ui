const defaultGetSearchText = item => item.text.toLowerCase();

export const useSearch = (list, getSearch = defaultGetSearchText) => {
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
