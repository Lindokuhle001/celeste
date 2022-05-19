import { createStore } from "redux";
import counterReducer from "./counterReducer.js";

let store = createStore(counterReducer);

export default store;
