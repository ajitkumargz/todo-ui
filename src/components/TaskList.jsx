import { useEffect, useState } from "react"
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

function TaskList() {
    const [list, setList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newId, setNewId] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8080/todo/task")
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [list])

    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure want to delete?")) {
            try {
                const res = await axios.delete(`http://localhost:8080/todo/task/${id}`);
            }
            catch (err) {
                console.error(err);
            }
        }
    }

    const handleEdit = async (task) => {
        setIsOpen(true);
        setNewTask(task.title);
        setNewStatus(task.status);
        setNewId(task.id);
        console.log(newTask);
    }

    const updateTask = async (task) => {
        try {
            await axios.put(`http://localhost:8080/todo/task/${newId}`, {
                title: newTask,
                status: newStatus
            });
            setIsOpen(false);
        }
        catch (err) {
            console.error(err);
        }

    }

    return (
        <div>
            <div className="listapp">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Task ID</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(task => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.title}</td>
                                        <td>{task.status}</td>
                                        <td><button className="icon-btn" onClick={() => handleEdit(task)}><FaEdit size={20} color="#646cff" /></button>
                                            <button className="delete-btn" onClick={() => deleteHandler(task.id)}><FaTrashAlt size={18} color="#ff4d4d" /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="editpop">
                        {isOpen && (
                            <div className="model-backdrop" onClick={() => setIsOpen(false)}>
                                <div className="model-content" onClick={e => e.stopPropagation()}>
                                    <div className="taskform">
                                        <label>Todo Title</label>
                                        <textarea rows={4} value={newTask} onChange={e => setNewTask(e.target.value)} />
                                        <label><b>Task Status</b></label>
                                        <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                            <option value={""}></option>
                                            <option value={"Active"}>Active</option>
                                            <option value={"Completed"}>Completed</option>
                                            <option value={"Not Started"}>Not Started</option>
                                        </select>
                                        <button onClick={updateTask}>Update Task</button>
                                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskList