import React from "react";
import Screen from "./Screen";
import UserContextProvider from "./context";

const App = () => {
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
};

export default App;
