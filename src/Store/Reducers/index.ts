/**
 * @file
 * @date 2022-6-27
 * @author li.liao
 * @lastModify li.liao 2022-6-27
 */
import { combineReducers } from "redux";
import TaskReducer from "./TaskReducer";

const rootReducer = combineReducers({
    TaskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
