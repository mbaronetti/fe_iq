//hooks
import { useState, useEffect } from "react";

export const randomItem = (items = []) => {
  //const [item, setItem] = useState(null);
  const length = items.length;
  const index = Math.floor(Math.random() * length);
  //useEffect(() => setItem(items[index]) , [items])
  return items[index];
};
