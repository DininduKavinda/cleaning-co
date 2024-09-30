import axios from "axios";

import { BASE_URL, HEADER, IncludeAll } from "./Api";


const USERS_URL = BASE_URL + "admin/users";

// Users API Services

export const getUsers = (page, url = '') =>
    axios.get(`${USERS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);


export const getUserById = (userId) =>
    axios.get(`${USERS_URL}/${userId}?${IncludeAll}`, HEADER);


export const createUser = (userData) =>
    axios.post(USERS_URL, userData, HEADER);


export const updateUser = (userId, userData) =>
    axios.put(`${USERS_URL}/${userId}`, userData, HEADER);


export const deleteUser = (userId) =>
    axios.delete(`${USERS_URL}/${userId}`, HEADER);
