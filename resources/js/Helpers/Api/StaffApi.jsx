import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "&includeAll=true";

const STAFFS_URL = BASE_URL + "web/staff";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
};

const HEADER2 = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Staffs APi Services

export const getStaffs = (page, url) =>
    axios.get(`${STAFFS_URL}?page=${page}${url}${IncludeAll}`, HEADER2);

export const getStaffById = (staffId) =>
    axios.get(`${STAFFS_URL}/${staffId}`, HEADER2);

export const createStaff = (staffData) =>
    axios.post(STAFFS_URL, staffData, HEADER);

export const updateStaff = (staffId, staffData) =>
    axios.put(`${STAFFS_URL}/${staffId}`, staffData, HEADER);

export const deleteStaff = (staffId) =>
    axios.delete(`${STAFFS_URL}/${staffId}`, HEADER2);
