/**
 * @file
 * @date 2022-6-27
 * @author li.liao
 * @lastModify li.liao 2022-6-27
 */

/**
 * 该接口描述了该数据在数据库中的数据结构
 * @param {string} id 数据的id,需要时独一无二的
 */
interface TaskReducer {
  taskList: Array<string>;
}

interface TaskActions<T, S> {
  type: T;
  payload: S;
}

export type { TaskReducer, TaskActions };
