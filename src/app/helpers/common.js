export const getIsEmptyArray = item => !item || !item.length;

export const keyBy = (data, field) => {
  if (!Array.isArray(data)) return {};

  return data.reduce((acc, item) => {
    if (item && item[field]) {
      acc[item[field]] = item;
    }

    return acc;
  }, {});
};

export const noop = () => {};
