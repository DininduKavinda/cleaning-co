import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const TASKS_URL = BASE_URL + "common/timecardTasks";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Tasks APi Services

export const getTimecardTasks = (page, url) =>
    axios.get(`${TASKS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getTimecardTaskById = (timecardTaskId) => axios.get(`${TASKS_URL}/${timecardTaskId}?${IncludeAll}`, HEADER);

export const createTimecardTask = (timecardTaskData) => axios.post(TASKS_URL, timecardTaskData, HEADER);

export const updateTimecardTask = (timecardTaskId, timecardTaskData) =>
    axios.put(`${TASKS_URL}/${timecardTaskId}`, timecardTaskData, HEADER);

export const deleteTimecardTask = (timecardTaskId) => axios.delete(`${TASKS_URL}/${timecardTaskId}`, HEADER);
