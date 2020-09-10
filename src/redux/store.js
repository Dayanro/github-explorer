import { createStore, compose } from "redux";
import rootReducer from "./reducers";
import middleWare from "../middleware"

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(middleWare));
};

export default configureStore;
