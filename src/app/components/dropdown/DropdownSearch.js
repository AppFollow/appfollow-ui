import PropTypes from 'prop-types';

export const DropdownSearch = ({search, setSearch}) => {
  const handleChange = React.useCallback(
    event => setSearch(event.target.value),
    [setSearch],
  );

  return (
    <div className="ui-select__search">
      <div className="ui-input">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          autoFocus
        />
        <i className="icon search ui-input__search" />
      </div>
    </div>
  );
};

DropdownSearch.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
