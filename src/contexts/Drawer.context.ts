import React from "react";

export const DrawerContext = React.createContext({
  drawer: false, // Initializing 'drawer' with null
  setDrawer: (arg: boolean) => {}, // Initializing 'setDrawer' with an empty function
});
