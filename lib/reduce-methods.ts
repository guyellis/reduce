
export const reduceImmutableMap = (data: number[]): Map<number, number> => {
  return data.reduce((acc: Readonly<Map<number, number>>, item) => {
    const map = new Map(acc);
    map.set(item, item);
    return map;
  }, new Map<number,number>());
};

export const reduceMutableMap = (data: number[]): Map<number, number> => {
  return data.reduce((acc: Map<number, number>, item) => {
    acc.set(item, item);
    return acc;
  }, new Map<number,number>());
};

export const reduceImmutableObject = (data: number[]): Record<string, number> => {
  return data.reduce((acc: Readonly<Record<string, number>>, item) => {
    return {
      ...acc,
      [item.toString()]: item,
    };
  }, {});
};

export const reduceMutableObject = (data: number[]): Record<string, number> => {
  return data.reduce((acc: Record<string, number>, item) => {
    acc[item.toString()] = item;
    return acc;
  }, {});
};
