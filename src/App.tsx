import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Store/rootReducer";
import * as actions from "./Store/Task/actions";

const App = () => {
  const createInp = useRef<HTMLInputElement>(null);
  const editInput = useRef<HTMLInputElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentEditIndex, setCurrentEditIndex] = useState<number>(-1);

  const taskState = useSelector((state: RootState) => state.taskReducer);
  const dispatch = useDispatch();
  const { taskList } = taskState;

  /**
   * creatTaskFuntcion
   */

  const creatTask = () => {
    const value = createInp.current!.value;
    if (value) {
      dispatch(actions.createTask(value));
      createInp.current!.value = "";
    } else {
      alert("请先输入任务");
    }
  };

  /**
   * delTaskFuntcion
   */

  const delTask = () => {
    if (currentIndex !== -1) {
      dispatch(actions.delTask(currentIndex));
      setCurrentIndex(-1);
    } else {
      alert("请先选择");
    }
  };

  /**
   * editTaskFuntcion
   * @param {number} index 修改中的index
   */

  const editItem = (index: number) => {
    setCurrentEditIndex(index);
  };

  /**
   * selectTaskFuntcion
   * @param {number} index 选中的index
   */

  const selectItem = (index: number) => {
    if (currentIndex === index) {
      setCurrentIndex(-1);
      return;
    }
    setCurrentIndex(index);
  };

  /**
   * editInputBlurFuntcion
   */

  const editInputBlur = () => {
    if (editInput.current!.value === "") {
      setCurrentEditIndex(-1);
      alert("无效修改");
      return;
    }

    dispatch(
      actions.updateTask({
        index: currentEditIndex,
        item: editInput.current!.value,
      })
    );
    setCurrentEditIndex(-1);
  };

  /**
   * currentEditIndex change
   */

  useEffect(() => {
    if (editInput.current && taskList) {
      editInput.current!.value = taskList[currentEditIndex];
      editInput.current.focus();
    }
  }, [currentEditIndex]);

  return (
    <div className="App">
      <input ref={createInp} type="text" placeholder="输入框" />
      <button onClick={creatTask}>创建</button>
      <button onClick={delTask}>删除</button>
      <ul className="taskList_list">
        {taskList?.map((item: string, index: number) => (
          <li key={index} onDoubleClick={() => editItem(index)}>
            {currentEditIndex !== index ? (
              <p
                className={index === currentIndex ? "active" : ""}
                onClick={() => selectItem(index)}
              >
                {item}
              </p>
            ) : (
              <input type="text" ref={editInput} onBlur={editInputBlur} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
