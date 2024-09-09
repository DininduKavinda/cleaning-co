import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "includeAll=true";

const COUNTRIES_URL = BASE_URL + "location/countries";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Countries APi Services

export const getCountries = (page, url) =>
    axios.get(`${COUNTRIES_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getCountryById = (countryId) => axios.get(`${COUNTRIES_URL}/${countryId}?${IncludeAll}`, HEADER);

export const createCountry = (countryData) => axios.post(COUNTRIES_URL, countryData, HEADER);

export const updateCountry = (countryId, countryData) =>
    axios.put(`${COUNTRIES_URL}/${countryId}`, countryData, HEADER);

export const deleteCountry = (countryId) => axios.delete(`${COUNTRIES_URL}/${countryId}`, HEADER);
