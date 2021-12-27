import BodyContainer from "@material-ui/core/Container";
import React from "react";
import { AppBar, UsersGrid } from "./components";
import { AppContainer } from "./elements";

export const App: React.FC = () => {
  return (
    <AppContainer>
      <AppBar />
      <BodyContainer>
        <UsersGrid />
      </BodyContainer>
    </AppContainer>
  );
};

export default App;
