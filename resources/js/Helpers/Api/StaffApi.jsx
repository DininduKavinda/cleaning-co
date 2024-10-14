import axios from "axios";

import { BASE_URL, HEADER, IncludeAll } from "./Api";

const STAFFS_URL = BASE_URL + "web/staff";

//Staffs APi Services

export const getStaffs = (page, url) =>
    axios.get(`${STAFFS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getStaffById = (staffId) =>
    axios.get(`${STAFFS_URL}/${staffId}?${includeAll}`, HEADER);

export const createStaff = (staffData) =>
    axios.post(`${STAFFS_URL}`, staffData, HEADER2);

export const updateStaff = (staffId, staffData) =>
    axios.put(`${STAFFS_URL}/${staffId}`, staffData, HEADER2);

export const deleteStaff = (staffId) =>
    axios.delete(`${STAFFS_URL}/${staffId}`, HEADER2);

export const searchStaff = (params) =>
    axios.get(`${STAFFS_URL}?${IncludeAll}&${params}`, HEADER);
