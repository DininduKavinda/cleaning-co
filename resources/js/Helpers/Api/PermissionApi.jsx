import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "?includeAll=true";

const PERMISSIONS_URL = BASE_URL + "admin/permissions";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Permissions APi Services

export const getPermissions = (page, url) =>
    axios.get(`${PERMISSIONS_URL}?page=${page}${url}`, HEADER);

export const getPermissionById = (permissionId) => axios.get(`${PERMISSIONS_URL}/${permissionId}`, HEADER);

export const createPermission = (permissionData) => axios.post(PERMISSIONS_URL, permissionData, HEADER);

export const updatePermission = (permissionId, permissionData) =>
    axios.put(`${PERMISSIONS_URL}/${permissionId}`, permissionData, HEADER);

export const deletePermission = (permissionId) => axios.delete(`${PERMISSIONS_URL}/${permissionId}`, HEADER);
