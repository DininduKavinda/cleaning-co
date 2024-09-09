import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const PROVINCES_URL = BASE_URL + "location/provinces";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Provinces APi Services

export const getProvinces = (page, url) =>
    axios.get(`${PROVINCES_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getProvinceById = (provinceId) => axios.get(`${PROVINCES_URL}/${provinceId}?${IncludeAll}`, HEADER);

export const createProvince = (provinceData) => axios.post(PROVINCES_URL, provinceData, HEADER);

export const updateProvince = (provinceId, provinceData) =>
    axios.put(`${PROVINCES_URL}/${provinceId}`, provinceData, HEADER);

export const deleteProvince = (provinceId) => axios.delete(`${PROVINCES_URL}/${provinceId}`, HEADER);
