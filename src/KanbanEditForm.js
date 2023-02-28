import React from "react";
import useInputState from "./useInputState";
import "./KanbanEditForm.css";
import { Box, TextField } from "@mui/material";

const KanbanEditForm = (props) => {
    const [text, handleChangeText] = useInputState(props.startText);
    const [user, handleChangeUser] = useInputState(props.startUser);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.editTask(props.taskId, user, text);
                props.toggle();
            }}
            className="KanbanEditForm"
        >   
            <Box m={2} pt={3}>
                <TextField
                    value={text}
                    onChange={handleChangeText}
                    label="Task"
                    style={{padding: '10px', width: '100%'}}
                />
                <TextField
                    value={user}
                    onChange={handleChangeUser}
                    label="For:"
                    style={{padding: '10px', width: '100%'}}
                />
            </Box>
            <button
                className="KanbanEditForm-btn"
                style={{ backgroundColor: `${props.color}` }}
            >
                Save
            </button>
        </form>
    );
};

export default KanbanEditForm;
