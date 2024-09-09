import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const DEPARTMENTS_URL = BASE_URL + "common/departments";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Departments APi Services

export const getDepartments = (page, url) =>
    axios.get(`${DEPARTMENTS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getDepartmentById = (departmentId) => axios.get(`${DEPARTMENTS_URL}/${departmentId}?${IncludeAll}`, HEADER);

export const createDepartment = (departmentData) => axios.post(DEPARTMENTS_URL, departmentData, HEADER);

export const updateDepartment = (departmentId, departmentData) =>
    axios.put(`${DEPARTMENTS_URL}/${departmentId}`, departmentData, HEADER);

export const deleteDepartment = (departmentId) => axios.delete(`${DEPARTMENTS_URL}/${departmentId}`, HEADER);
