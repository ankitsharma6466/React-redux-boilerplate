import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import { routes } from "./config/url";

import App from "./compositions/App";
import NotFound from "./compositions/NotFound";

import Home from "./compositions/Home";
import SourceCity from "./compositions/SourceCity";

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path={routes.home} component={App}>
      <IndexRoute component={Home}/>
      <Route path={routes.sourceCity} component={SourceCity}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
