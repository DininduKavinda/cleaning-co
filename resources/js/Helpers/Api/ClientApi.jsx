import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const IncludeAll = "?includeAll=true";

const CLIENTS_URL = BASE_URL + "web/clients";

const TOKEN = localStorage.getItem("authToken");

const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

//Clients APi Services

export const getClients = (page, url) =>
    axios.get(`${CLIENTS_URL}?page=${page}${url}`, HEADER);

export const getClientById = (clientId) => axios.get(`${CLIENTS_URL}/${clientId}`, HEADER);

export const createClient = (clientData) => axios.post(CLIENTS_URL, clientData, HEADER, );

export const updateClient = (clientId, clientData) =>
    axios.put(`${CLIENTS_URL}/${clientId}`, clientData, HEADER);

export const deleteClient = (clientId) => axios.delete(`${CLIENTS_URL}/${clientId}`, HEADER);
