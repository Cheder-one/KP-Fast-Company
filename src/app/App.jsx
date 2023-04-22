import React from "react";
import NavBar from "./components/navigation/navBar";
import { Switch, Route } from "react-router-dom";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import Users from "./components/layouts/users";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="" component={Main} />
      </Switch>
    </>
  );
};

export default App;
