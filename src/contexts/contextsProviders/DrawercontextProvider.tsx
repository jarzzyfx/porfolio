import { useState } from "react";

import { DrawerContext } from "../Drawer.context";

export const DrawerContextProvider = ({ children }: any) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <DrawerContext.Provider value={{ drawer, setDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
