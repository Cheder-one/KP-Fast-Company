import React from "react";
import NavBar from "./components/navigation/navBar";
import { Switch, Route } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
// import Users from "./layouts/users";
import UsersList from "./components/containers/usersList";
import User from "./layouts/user";
import Page404 from "./layouts/page404";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/users/:userId" component={User} />
        <Route path="/users/" component={UsersList} />
        <Route path="/login" component={Login} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default App;
