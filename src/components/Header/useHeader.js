import { useState, useEffect } from "react";
const useHeader = () => {
  const [activeIcon, setActiveIcon] = useState(false);
  useEffect(() => {
    if (activeIcon) {
      setTimeout(() => setActiveIcon(!activeIcon), 500);
      return;
    }
    setTimeout(() => setActiveIcon(!activeIcon), 1500);
  }, [activeIcon]);

  return { activeIcon };
};

export default useHeader;
