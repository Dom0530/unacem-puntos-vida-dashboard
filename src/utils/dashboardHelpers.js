export function getMonthlyData(dataset, year, month, location) {
  return dataset?.years?.[String(year)]?.monthly?.[String(month)]?.[location] ?? {
    people: [],
    areas: [],
  };
}

export function getMonthlyTopThree(data, type) {
  const ranking = data?.[type] ?? [];
  return ranking.slice(0, 3);
}

export function getPreviousMonthWinner(dataset, year, month, location, type) {
  const previousMonth = Number(month) - 1;
  if (previousMonth < 1) return null;

  const previous = getMonthlyData(dataset, year, previousMonth, location);
  const ranking = previous?.[type] ?? [];
  return ranking[0] ?? null;
}

export function getAnnualRanking(dataset, year, location, type) {
  return dataset?.years?.[String(year)]?.annual?.[location]?.[type] ?? [];
}

export function getHallOfFame(dataset, year, type) {
  return dataset?.years?.[String(year)]?.hallOfFame?.[type] ?? [];
}

export function getMonthLabel(dataset, month) {
  return dataset?.months?.[String(month)] ?? `Mes ${month}`;
}
