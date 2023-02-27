import React from "react";
import "./KanbanModal.css";
import useInputState from "./useInputState";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";

const KanbanModal = (props) => {
  const columnData = props.columnData;

  const [task, handleChangeTask] = useInputState("");
  const [user, handleChangeUser] = useInputState("");
  const [first, handleChangeFirst] = useInputState(columnData.firstAnswer);
  const [second, handleChangeSecond] = useInputState(columnData.secondAnswer);
  const [third, handleChangeThird] = useInputState(columnData.thirdAnswer);

  const newTask = {
    id: uuidv4(),
    text: task,
    idColumn: props.modal,
    user: user,
    firstAnswer: first, 
    secondAnswer: second, 
    thirdAnswer: third,
  };

  return (
    <div className="KanbanModal">
      <section className="KanbanModal-content">
        <span
          className="KanbanModal-close-btn"
          onClick={props.closeModal}
        ></span>
        <form
          className="KanbanModal-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.addTask(newTask);
          }}
        >
          <div className="KanbanModal-input-container">
            <TextField
              id="filled-search"
              label="Task:"
              type="search"
              value={task}
              onChange={handleChangeTask}
            />
          </div>
          <div className="KanbanModal-input-container">
            <TextField
              id="filled-search"
              label="For:"
              type="search"
              value={user}
              onChange={handleChangeUser}
            />
          </div>
          <div className="KanbanModal-input-container">
            <TextField
              id="standard-multiline-static"
              helperText={columnData.first}
              multiline
              label="Question 1:"
              rows={3}
              value={first}
              onChange={handleChangeFirst}
            />
          </div>
          <div className="KanbanModal-input-container">
            <TextField
              id="standard-multiline-static"
              helperText={columnData.second}
              multiline
              label="Question 2:"
              rows={3}
              value={second}
              onChange={handleChangeSecond}
            />
          </div>
          <div className="KanbanModal-input-container">
            <TextField
              id="standard-multiline-static"
              helperText={columnData.third}
              multiline
              label="Question 3:"
              rows={3}
              value={third}
              onChange={handleChangeThird}
            />
          </div>
          <button className="KanbanModal-input-submit-btn">
            {!(first || second || third || (user && task)) ? "Close" : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default KanbanModal;
