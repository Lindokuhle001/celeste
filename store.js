import { createStore } from "redux";
import counterReducer from "./counterReducer.js";

let store = createStore(counterReducer);

console.log(store.getState());

export default store;
