import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "?includeAll=true";

const ROLES_URL = BASE_URL + "admin/roles";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Roles APi Services

export const getRoles = (page, url) =>
    axios.get(`${ROLES_URL}?page=${page}${url}`, HEADER);

export const getRoleById = (roleId) =>
    axios.get(`${ROLES_URL}/${roleId}`, HEADER);

export const createRole = (roleData) => axios.post(ROLES_URL, roleData, HEADER);

export const updateRole = (roleId, roleData) =>
    axios.put(`${ROLES_URL}/${roleId}`, roleData, HEADER);

export const deleteRole = (roleId) =>
    axios.delete(`${ROLES_URL}/${roleId}`, HEADER);
