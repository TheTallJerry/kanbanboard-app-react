import React from "react";
import "./KanbanTask.css";
import { Draggable } from "react-beautiful-dnd";
import useToggle from "./useToggleState";
import KanbanEditForm from "./KanbanEditForm";
import { Button, Card, CardHeader, CardContent, Typography, CardActions, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const KanbanTask = (props) => {
    const [isEditing, toggle] = useToggle(false);

    return (
        <Draggable draggableId={`${props.task.id}`} index={props.index}>
            {(provided) => (
                <Card
                    // className="KanbanTask"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    sx={{ margin: '10px' }}
                >
                    {isEditing ? (
                        <KanbanEditForm
                            color={props.color}
                            editTask={props.editTask}
                            taskId={props.task.id}
                            toggle={toggle}
                            startUser={props.task.user}
                            startText={props.task.text}
                        />
                    ) : (
                        <>
                            <CardHeader title={ props.task.user }/>
                            <CardContent>
                                <Typography variant="h6" color="text.primary">
                                {props.task.text}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="Edit Task" onClick={toggle}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="Delete Task" onClick={() => props.removeTask(props.task.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </>
                    )}
                </Card>
            )}
        </Draggable>
    );
};

export default KanbanTask;
