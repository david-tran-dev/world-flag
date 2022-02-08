export function filterResultByNumber(list, number) {
  if (list.length) {
    list.length = number;
  }
  return list;
}

export function getCountriesByRegion(list, region) {
  const filterList = list.filter((country) => country.region === region);
  return filterList;
}
