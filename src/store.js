import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import freeze from "redux-freeze";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { environment } from "./utils/constants";

import { reducers } from "./reducers/index";

let middlewares = [];

//for react router
middlewares.push(routerMiddleware(browserHistory));

//for promises, since we are using axios for networking
middlewares.push(promise());

//for async operations, network calls
middlewares.push(thunk);

//smart console logging of actions
middlewares.push(logger);

// add freeze dev middleware
// this prevents state from being mutated anywhere in the app during dev
if (process.env.NODE_ENV !== environment.prod) {
  middlewares.push(freeze);
}

// apply middlewares
let middleware = applyMiddleware(...middlewares);

// create store
const store = createStore(reducers, middleware);

// create history
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };
