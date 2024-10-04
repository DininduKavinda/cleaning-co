import axios from "axios";
import { BASE_URL, HEADER, IncludeAll } from "./Api";

const COUNTRIES_URL = BASE_URL + "location/countries";

//Countries APi Services

export const getCountries = (page, url) =>
    axios.get(`${COUNTRIES_URL}?page=${page}${url}&${IncludeAll}`, HEADER);

export const getCountryById = (countryId) => axios.get(`${COUNTRIES_URL}/${countryId}?${IncludeAll}`, HEADER);

export const createCountry = (countryData) => axios.post(COUNTRIES_URL, countryData, HEADER);

export const updateCountry = (countryId, countryData) =>
    axios.put(`${COUNTRIES_URL}/${countryId}`, countryData, HEADER);

export const deleteCountry = (countryId) => axios.delete(`${COUNTRIES_URL}/${countryId}`, HEADER);

export const searchCountries = (params) => axios.get(`${COUNTRIES_URL}?${IncludeAll}`, { params }, HEADER);