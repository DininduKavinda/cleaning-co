import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const TASKS_URL = BASE_URL + "common/itemTypes";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//ItemTypes APi Services

export const getItemTypes = (page, url) =>
    axios.get(`${TASKS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getItemTypeById = (itemTypeId) => axios.get(`${TASKS_URL}/${itemTypeId}?${IncludeAll}`, HEADER);

export const createItemType = (itemTypeData) => axios.post(TASKS_URL, itemTypeData, HEADER);

export const updateItemType = (itemTypeId, itemTypeData) =>
    axios.put(`${TASKS_URL}/${itemTypeId}`, itemTypeData, HEADER);

export const deleteItemType = (itemTypeId) => axios.delete(`${TASKS_URL}/${itemTypeId}`, HEADER);
