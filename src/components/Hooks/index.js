//hooks


export const getRandomItem = (items = []) => {
  const length = items.length;
  const index = Math.floor(Math.random() * length);
  return items[index];
};

export const checkArrayItemExistance = (item, array) => {
  const exists = array.filter(elem => elem === item).length > 0
  return exists
}
