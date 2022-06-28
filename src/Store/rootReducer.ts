import { combineReducers } from "redux";
import TaskReducer from "./Task/reducer";

const rootReducer = combineReducers({
  taskReducer: TaskReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
