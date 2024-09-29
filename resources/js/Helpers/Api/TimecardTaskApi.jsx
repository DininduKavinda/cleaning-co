import axios from "axios";

import { BASE_URL, HEADER, IncludeAll } from "./Api";

const TASKS_URL = BASE_URL + "common/timecardTasks";

//Tasks APi Services

export const getTimecardTasks = (page, url) =>
    axios.get(`${TASKS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getTimecardTaskById = (timecardTaskId) => axios.get(`${TASKS_URL}/${timecardTaskId}?${IncludeAll}`, HEADER);

export const createTimecardTask = (timecardTaskData) => axios.post(TASKS_URL, timecardTaskData, HEADER);

export const updateTimecardTask = (timecardTaskId, timecardTaskData) =>
    axios.put(`${TASKS_URL}/${timecardTaskId}`, timecardTaskData, HEADER);

export const deleteTimecardTask = (timecardTaskId) => axios.delete(`${TASKS_URL}/${timecardTaskId}`, HEADER);
