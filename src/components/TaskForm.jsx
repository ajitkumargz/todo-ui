import axios from "axios";
import { useEffect, useState } from "react";

function TaskForm() {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState(' ');

    const taskHandler = async () => {
        try {
            const res = await axios.post("http://localhost:8080/todo/task", {
                title: task,
                status: status
            });
            setTask('');
            setStatus('');
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <div className="taskform">
                <label>Todo Title</label>
                <textarea value={task} onChange={e => setTask(e.target.value)} />
                <label><b>Task Status</b></label>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value={""}></option>
                    <option value={"Active"}>Active</option>
                    <option value={"Completed"}>Completed</option>
                    <option value={"Not Started"}>Not Started</option>
                </select>
                <button onClick={taskHandler}>Add Task</button>
            </div>
        </div>
    )
}
export default TaskForm