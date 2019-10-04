//hooks


export const randomItem = (items = []) => {
  const length = items.length;
  const index = Math.floor(Math.random() * length);
  return items[index];
};

export const checkArrayItemExistance = (item, array) => {
  const exists = array.filter(elem => elem === item).length > 0
  console.log(exists)
  return exists
}
