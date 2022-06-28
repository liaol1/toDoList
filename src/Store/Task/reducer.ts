/**
 * @file
 * @date 2022-6-27
 * @author li.liao
 * @lastModify li.liao 2022-6-27
 */

import * as types from "./actionTypes";
import { ACTION_TYPE } from "./constants";

const initialState: types.TaskReducer = {
  taskList: ["元素1", "元素2", "元素3"],
};

const TaskReducer = (
  state: types.TaskReducer = initialState,
  action: types.TaskActions<any, any>
) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CREATE_NEW_TASK:
      state.taskList.push(payload);
      state.taskList = [...state.taskList];
      return { ...state };

    case ACTION_TYPE.DELECT_TASK:
      state.taskList.splice(payload, 1);
      state.taskList = [...state.taskList];
      return { ...state };

    case ACTION_TYPE.UPDATE_TASK:
      const { index, item } = payload;
      state.taskList[index] = item;
      state.taskList = [...state.taskList];
      return { ...state };

    default:
      return state;
  }
};

export default TaskReducer;
