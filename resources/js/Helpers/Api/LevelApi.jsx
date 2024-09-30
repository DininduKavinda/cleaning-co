import axios from "axios";

import { BASE_URL, HEADER, IncludeAll } from "./Api";

const LEVELS_URL = BASE_URL + "common/levels";


//Levels APi Services

export const getLevels = (page, url) =>
    axios.get(`${LEVELS_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getLevelById = (levelId) => axios.get(`${LEVELS_URL}/${levelId}?${IncludeAll}`, HEADER);

export const createLevel = (levelData) => axios.post(LEVELS_URL, levelData, HEADER);

export const updateLevel = (levelId, levelData) =>
    axios.put(`${LEVELS_URL}/${levelId}`, levelData, HEADER);

export const deleteLevel = (levelId) => axios.delete(`${LEVELS_URL}/${levelId}`, HEADER);
