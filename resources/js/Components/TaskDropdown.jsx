import React, { useEffect, useState } from "react";
import axios from "axios";

const TOKEN = localStorage.getItem("authToken");
const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

function TaskDropdown({ value, onChange }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/common/tasks`,HEADER);
                setTasks(response.data.data); // Assuming the API returns a list of tasks
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return (
        <select
            className="form-control"
            value={value}
            name="task_id"
            onChange={(e) => onChange(e.target.value)}
            disabled={loading}
        >
            <option value="">Select Task</option>
            {tasks.map((task) => (
                <option key={task.id} value={task.id}>
                    {task.name}
                </option>
            ))}
        </select>
    );
}

export default TaskDropdown;