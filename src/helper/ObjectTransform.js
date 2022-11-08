export const transform = data => {
  Object.values(
    data.reduce((result, { item_name, status, category }) => {
      // Create new group
      if (!result[category])
        result[category] = {
          category,
          items: [],
        };
      // Append to group
      result[category].items.push({
        item_name,
        status,
      });
      return result;
    }, {})
  );
};
