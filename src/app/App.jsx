import React from "react";
import NavBar from "./components/ui/navBar.jsx";
import { Switch, Route } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersListPage from "./components/page/usersListPage";
import User from "./layouts/users.jsx";
import Page404 from "./layouts/other/page404.jsx";
import CamillePage from "./layouts/other/about";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/users/:userId" component={User} />
        <Route path="/users/" component={UsersListPage} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={CamillePage} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default App;
