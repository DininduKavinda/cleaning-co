import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "?includeAll=true";

const USERS_URL = BASE_URL + "admin/users";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Users APi Services

export const getUsers = (page, url) =>
    axios.get(`${USERS_URL}?page=${page}${url}`, HEADER);

export const getUserById = (userId) => axios.get(`${USERS_URL}/${userId}`, HEADER);

export const createUser = (userData) => axios.post(USERS_URL, userData, HEADER);

export const updateUser = (userId, userData) =>
    axios.put(`${USERS_URL}/${userId}`, userData, HEADER);

export const deleteUser = (userId) => axios.delete(`${USERS_URL}/${userId}`, HEADER);
