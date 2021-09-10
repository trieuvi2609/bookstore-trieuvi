import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import HomePage from "views/HomePage";
import Cart from "views/Cart";
export default function App(){
    return(
    <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path = "/cart" component = {Cart}/>
      <Route path = "/homepage" component = {HomePage}/>
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/index" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/homepage" />
    </Switch>
  </BrowserRouter>);
}