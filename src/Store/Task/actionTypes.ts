/**
 * @file
 * @date 2022-6-27
 * @author li.liao
 * @lastModify li.liao 2022-6-27
 */

import { ACTION_TYPE } from "./constants";

interface CreateTaskAction {
  (payload: string): {
    type: typeof ACTION_TYPE.CREATE_NEW_TASK;
    payload: string;
  };
}

interface DelTaskAction {
  (payload: number): {
    type: typeof ACTION_TYPE.DELECT_TASK;
    payload: number;
  };
}

interface UpdateTaskAction {
  (payload: { item: string; index: number }): {
    type: typeof ACTION_TYPE.UPDATE_TASK;
    payload: {
      item: string;
      index: number;
    };
  };
}

interface TaskReducer {
  taskList: Array<string>;
}

interface TaskActions<T, S> {
  type: T;
  payload: S;
}

export type {
  CreateTaskAction,
  DelTaskAction,
  UpdateTaskAction,
  TaskReducer,
  TaskActions,
};
