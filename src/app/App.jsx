import React from "react";
import NavBar from "./components/ui/navBar";
import { Switch, Route } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import Page404 from "./components/page/templates/page404";
import CamillePage from "./components/page/templates/about";
import FeedbackPage from "./components/page/feedbackPage";
import OrderPage from "./components/page/orderPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/order" component={OrderPage} />
        <Route path="/feedback" component={FeedbackPage} />
        <Route path="/about" component={CamillePage} />
        <Route path="/" component={Main} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default App;
