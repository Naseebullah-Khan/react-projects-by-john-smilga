export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, value) => {
  let unique = data.map((item) => {
    return item[value];
  });

  return ["all", ...new Set(value === "colors" ? unique.flat() : unique)];
};
