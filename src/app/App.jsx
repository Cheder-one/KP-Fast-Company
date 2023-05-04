import React from "react";
import NavBar from "./components/ui/navBar";
import { Switch, Route } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersListPage from "./components/page/usersListPage";
import User from "./layouts/users";
import Page404 from "./layouts/other/page404";
import CamillePage from "./layouts/other/about";
import FeedbackPage from "./components/page/feedbackPage";
import OrderPage from "./components/page/orderPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/users/:userId" component={User} />
        <Route path="/users/" component={UsersListPage} />
        <Route path="/login" component={Login} />
        <Route path="/order" component={OrderPage} />
        <Route path="/feedback" component={FeedbackPage} />
        <Route path="/about" component={CamillePage} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default App;
