import axios from "axios";
import { BASE_URL, HEADER, IncludeAll } from "./Api";


const DEPARTMENTS_URL = BASE_URL + "common/departments";

//Departments APi Services

export const getDepartments = (page, url) =>
    axios.get(`${DEPARTMENTS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getDepartmentById = (departmentId) => axios.get(`${DEPARTMENTS_URL}/${departmentId}?${IncludeAll}`, HEADER);

export const createDepartment = (departmentData) => axios.post(DEPARTMENTS_URL, departmentData, HEADER);

export const updateDepartment = (departmentId, departmentData) =>
    axios.put(`${DEPARTMENTS_URL}/${departmentId}`, departmentData, HEADER);

export const deleteDepartment = (departmentId) => axios.delete(`${DEPARTMENTS_URL}/${departmentId}`, HEADER);
