import BodyContainer from "@material-ui/core/Container";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./store";
import { AppBar, UsersGrid } from "./components";
import { AppContainer } from "./elements";
import { UsersList } from "./modules";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <AppBar />
        <BodyContainer>
          <Router>
            <Routes>
              <Route path="/" element={<UsersList />} />
            </Routes>
          </Router>
          {/* <UsersGrid /> */}
        </BodyContainer>
      </AppContainer>
    </Provider>
  );
};

export default App;
