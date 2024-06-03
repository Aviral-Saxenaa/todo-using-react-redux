import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMinusCircle } from "react-icons/fa";
import { removeTask, editTask, completedTask } from '../app/taskSlice';
import { MdModeEdit } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null);
    const [editText, setEditText] = useState('');
        console.log(tasks);
    const handleRemove = (id) => {
        dispatch(removeTask(id));
    };

    const handleEdit = (id, text) => {
        setIsEditing(id);
        setEditText(text);
    };

    const handleSaveEdit = (id) => {
        dispatch(editTask({ id, newText: editText }));
        setIsEditing(null);
        setEditText('');
    };

    const handleComplete = (id) => {
        dispatch(completedTask(id));
    };

    return (
        <div>
            {tasks.length === 0 ? (
                <h2 style={{ textAlign: "center", marginTop: "100px" }}>No tasks available</h2>
            ) : (
                <ul style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 0,
                    margin: 0
                }}>
                    {tasks.map((task) => (
                        <div key={task.id} style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "80%",
                            marginTop: "20px",
                            padding: "10px 30px",
                            border: "2px solid black",
                            alignItems: "center"
                        }}>
                            {isEditing === task.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onBlur={() => handleSaveEdit(task.id)}
                                    style={{ flexGrow: 1, margin: 0, padding: 0 }}
                                />
                            ) : (
                                <li style={{
                                    flexGrow: 1,
                                    margin: 0,
                                    padding: 0,
                                    listStyle: "none",
                                    textDecoration: task.completed ? "line-through" : "none"
                                }}>
                                    {task.text}
                                </li>
                            )}
                            <SiTicktick style={{
                                color: "green",
                                fontSize: 30,
                                cursor: "pointer",
                                marginRight: 10
                            }}
                                onClick={() => handleComplete(task.id)}
                            />
                            <MdModeEdit style={{
                                color: "black",
                                fontSize: 30,
                                cursor: "pointer",
                                marginRight: 10
                            }}
                                onClick={() => handleEdit(task.id, task.text)}
                            />
                            <FaMinusCircle style={{
                                color: "red",
                                fontSize: 30,
                                cursor: "pointer",
                            }}
                                onClick={() => handleRemove(task.id)}
                            />
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;
