import React from "react";
import "./KanbanModal.css";
import useInputState from "./useInputState";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";

const KanbanModal = (props) => {
  const [task, handleChangeTask] = useInputState("");
  const [user, handleChangeUser] = useInputState("");
  const [first, handleChangeFirst] = useInputState("");
  const [second, handleChangeSecond] = useInputState("");
  const [third, handleChangeThird] = useInputState("");

  const columnData = props.columnData;

  const newTask = {
    id: uuidv4(),
    text: task,
    idColumn: props.modal,
    user: user,
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
              defaultValue="Default Value"
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
              defaultValue="Default Value"
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
              defaultValue="Default Value"
              value={third}
              onChange={handleChangeThird}
            />
          </div>
          <button className="KanbanModal-input-submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default KanbanModal;
