import * as types from "./types";
import * as TaskConstants from "../../Constants/TaskConstants";

const createTask: types.CreateTaskAction = (payload) => {
  return {
    type: TaskConstants.ACTION_TYPE.CREATE_NEW_TASK,
    payload,
  };
};

const delTask: types.DelTaskAction = (payload) => {
  return {
    type: TaskConstants.ACTION_TYPE.DELECT_TASK,
    payload,
  };
};
const updateTask: types.UpdateTaskAction = (payload) => {
  return {
    type: TaskConstants.ACTION_TYPE.UPDATE_TASK,
    payload,
  };
};

const TaskAction = {
  createTask,
  delTask,
  updateTask,
};

export default TaskAction;
