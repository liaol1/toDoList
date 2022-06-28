/**
 * @file
 * @date 2022-6-27
 * @author li.liao
 * @lastModify li.liao 2022-6-27
 */
import { createStore } from "redux";
import Reducers from "./rootReducer";

const store = createStore(Reducers);
export default store;
