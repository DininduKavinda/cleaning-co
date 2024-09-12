import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const TASKS_URL = BASE_URL + "common/tasks";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Tasks APi Services

export const getTasks = (page, url) =>
    axios.get(`${TASKS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getTaskById = (taskId) => axios.get(`${TASKS_URL}/${taskId}?${IncludeAll}`, HEADER);

export const createTask = (taskData) => axios.post(TASKS_URL, taskData, HEADER);

export const updateTask = (taskId, taskData) =>
    axios.put(`${TASKS_URL}/${taskId}`, taskData, HEADER);

export const deleteTask = (taskId) => axios.delete(`${TASKS_URL}/${taskId}`, HEADER);
