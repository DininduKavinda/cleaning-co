import axios from "axios";
import { BASE_URL, HEADER, IncludeAll } from "./Api";

const DISTRICTS_URL = BASE_URL + "location/districts";

//Districts APi Services

export const getDistricts = (page, url) =>
    axios.get(`${DISTRICTS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getDistrictById = (districtId) => axios.get(`${DISTRICTS_URL}/${districtId}?${IncludeAll}`, HEADER);

export const createDistrict = (districtData) => axios.post(DISTRICTS_URL, districtData, HEADER);

export const updateDistrict = (districtId, districtData) =>
    axios.put(`${DISTRICTS_URL}/${districtId}`, districtData, HEADER);

export const deleteDistrict = (districtId) => axios.delete(`${DISTRICTS_URL}/${districtId}`, HEADER);

export const searchDistricts = (params) => axios.get(`${DISTRICTS_URL}?${IncludeAll}`, { params }, HEADER);