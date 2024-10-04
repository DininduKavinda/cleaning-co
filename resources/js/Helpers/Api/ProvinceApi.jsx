import axios from "axios";

import { BASE_URL, HEADER, IncludeAll } from "./Api";

const PROVINCES_URL = BASE_URL + "location/provinces";


//Provinces APi Services

export const getProvinces = (page, url) =>
    axios.get(`${PROVINCES_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getProvinceById = (provinceId) => axios.get(`${PROVINCES_URL}/${provinceId}?${IncludeAll}`, HEADER);

export const createProvince = (provinceData) => axios.post(PROVINCES_URL, provinceData, HEADER);

export const updateProvince = (provinceId, provinceData) =>
    axios.put(`${PROVINCES_URL}/${provinceId}`, provinceData, HEADER);

export const deleteProvince = (provinceId) => axios.delete(`${PROVINCES_URL}/${provinceId}`, HEADER);

export const searchProvinces = (params) => axios.get(`${PROVINCES_URL}?${IncludeAll}`, { params }, HEADER);