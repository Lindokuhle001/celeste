import { createStore } from "redux";
import counterReducer from "./reducer.js";

let store = createStore(counterReducer);

export default store;
