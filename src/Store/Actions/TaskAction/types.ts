/**
 * @file
 * @date 2022-6-27
 * @author li.liao
 * @lastModify li.liao 2022-6-27
 */

import * as TaskConstants from "../../Constants/TaskConstants";

interface CreateTaskAction {
  (payload: string): {
    type: typeof TaskConstants.ACTION_TYPE.CREATE_NEW_TASK;
    payload: string;
  };
}

interface DelTaskAction {
  (payload: number): {
    type: typeof TaskConstants.ACTION_TYPE.DELECT_TASK;
    payload: number;
  };
}

interface UpdateTaskAction {
  (payload: { item: string; index: number }): {
    type: typeof TaskConstants.ACTION_TYPE.UPDATE_TASK;
    payload: {
      item: string;
      index: number;
    };
  };
}

export type { CreateTaskAction, DelTaskAction, UpdateTaskAction };
