import axios from "axios";
import { BASE_URL, HEADER, IncludeAll } from "./Api";

const TASKS_URL = BASE_URL + "common/tasks";

//Tasks APi Services

export const getTasks = (page, url) =>
    axios.get(`${TASKS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getTaskById = (taskId) => axios.get(`${TASKS_URL}/${taskId}?${IncludeAll}`, HEADER);

export const createTask = (taskData) => axios.post(TASKS_URL, taskData, HEADER);

export const updateTask = (taskId, taskData) =>
    axios.put(`${TASKS_URL}/${taskId}`, taskData, HEADER);

export const deleteTask = (taskId) => axios.delete(`${TASKS_URL}/${taskId}`, HEADER);
