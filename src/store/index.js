import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { categoriesReducer, productsReducer } from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
