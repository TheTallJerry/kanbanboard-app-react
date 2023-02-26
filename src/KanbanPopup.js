import React from "react";
import "./KanbanPopup.css";
import useInputState from "./useInputState";
import TextField from "@mui/material/TextField";

const KanbanPopup = (props) => {
  const [first, handleChangeFirst] = useInputState("");
  const [second, handleChangeSecond] = useInputState("");
  const [third, handleChangeThird] = useInputState("");

  const columnData = props.columnData;

  return (
    <div className="KanbanPopup">
      <section className="KanbanPopup-content">
        <span
          className="KanbanPopup-close-btn"
          onClick={props.closePopup}
        ></span>
        <form
          className="KanbanPopup-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          <button
            className="KanbanPopup-input-submit-btn"
            onClick={props.closePopup}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default KanbanPopup;
