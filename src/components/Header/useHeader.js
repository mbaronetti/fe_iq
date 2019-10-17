import { useState, useEffect } from "react";
const useHeader = () => {
  const [activeIcon, setActiveIcon] = useState(false);
  useEffect(() => {
    if (activeIcon) {
      setTimeout(() => setActiveIcon(!activeIcon), 250);
      return;
    }
    setTimeout(() => setActiveIcon(!activeIcon), 2500);
  }, [activeIcon]);

  return { activeIcon };
};

export default useHeader;
