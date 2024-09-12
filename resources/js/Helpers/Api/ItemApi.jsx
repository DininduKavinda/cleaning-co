import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const TASKS_URL = BASE_URL + "common/items";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Items APi Services

export const getItems = (page, url) =>
    axios.get(`${TASKS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getItemById = (itemId) => axios.get(`${TASKS_URL}/${itemId}?${IncludeAll}`, HEADER);

export const createItem = (itemData) => axios.post(TASKS_URL, itemData, HEADER);

export const updateItem = (itemId, itemData) =>
    axios.put(`${TASKS_URL}/${itemId}`, itemData, HEADER);

export const deleteItem = (itemId) => axios.delete(`${TASKS_URL}/${itemId}`, HEADER);
