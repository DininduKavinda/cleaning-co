import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const DISTRICTS_URL = BASE_URL + "location/districts";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Districts APi Services

export const getDistricts = (page, url) =>
    axios.get(`${DISTRICTS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getDistrictById = (districtId) => axios.get(`${DISTRICTS_URL}/${districtId}?${IncludeAll}`, HEADER);

export const createDistrict = (districtData) => axios.post(DISTRICTS_URL, districtData, HEADER);

export const updateDistrict = (districtId, districtData) =>
    axios.put(`${DISTRICTS_URL}/${districtId}`, districtData, HEADER);

export const deleteDistrict = (districtId) => axios.delete(`${DISTRICTS_URL}/${districtId}`, HEADER);
