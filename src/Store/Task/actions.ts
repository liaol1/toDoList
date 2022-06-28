import * as types from "./actionTypes";
import { ACTION_TYPE } from "./constants";

export const createTask: types.CreateTaskAction = (payload) => {
  return {
    // type: types.ACTION_TYPE.CREATE_NEW_TASK,
    type: ACTION_TYPE.CREATE_NEW_TASK,
    payload,
  };
};

export const delTask: types.DelTaskAction = (payload) => {
  return {
    type: ACTION_TYPE.DELECT_TASK,
    payload,
  };
};
export const updateTask: types.UpdateTaskAction = (payload) => {
  return {
    type: ACTION_TYPE.UPDATE_TASK,
    payload,
  };
};
