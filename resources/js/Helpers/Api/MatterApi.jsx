import axios from "axios";

import { BASE_URL, HEADER, HEADER2, IncludeAll } from "./Api";

const MATTERS_URL = BASE_URL + "core/matters";


//Matters APi Services

export const getMatters = (page, url) =>
    axios.get(`${MATTERS_URL}?page=${page}${url}&${IncludeAll}`, HEADER2);

export const getMatterById = (matterId) =>
    axios.get(`${MATTERS_URL}/${matterId}?${IncludeAll}`, HEADER2);

export const createMatter = (matterData) =>
    axios.post(MATTERS_URL, matterData, HEADER);

export const updateMatter = (matterId, matterData) =>
    axios.put(`${MATTERS_URL}/${matterId}`, matterData, HEADER);

export const deleteMatter = (matterId) =>
    axios.delete(`${MATTERS_URL}/${matterId}`, HEADER2);
