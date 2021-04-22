import React from 'react';

const getText = (
  isHaveData,
  isSearch,
  loading,
) => {
  if (loading) return 'Loading...';

  if (!isHaveData && isSearch) return 'Nothing found';

  if (!isHaveData && !isSearch) return 'No data available';

  return '';
};

export const DropdownMessage = ({
  isHaveData,
  isSearch,
  loading,
}) => {
  const text = getText(
    isHaveData,
    isSearch,
    loading,
  );

  if (!text) return null;

  return (
    <div className="ui-select__message">
      {text}
    </div>
  );
};
