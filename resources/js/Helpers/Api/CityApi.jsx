import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const CITIES_URL = BASE_URL + "location/cities";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Cities APi Services

export const getCities = (page, url) =>
    axios.get(`${CITIES_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getCityById = (cityId) => axios.get(`${CITIES_URL}/${cityId}?${IncludeAll}`, HEADER);

export const createCity = (cityData) => axios.post(CITIES_URL, cityData, HEADER);

export const updateCity = (cityId, cityData) =>
    axios.put(`${CITIES_URL}/${cityId}`, cityData, HEADER);

export const deleteCity = (cityId) => axios.delete(`${CITIES_URL}/${cityId}`, HEADER);
