import axios from "axios";

import { BASE_URL, HEADER, HEADER2, IncludeAll } from "./Api";

const CLIENTS_URL = BASE_URL + "web/clients";


//Clients APi Services

export const getClients = (page, url) =>
    axios.get(`${CLIENTS_URL}?page=${page}${url}${IncludeAll}`, HEADER2);

export const getClientById = (clientId) =>
    axios.get(`${CLIENTS_URL}/${clientId}`, HEADER2);

export const createClient = (clientData) =>
    axios.post(CLIENTS_URL, clientData, HEADER);

export const updateClient = (clientId, clientData) =>
    axios.put(`${CLIENTS_URL}/${clientId}`, clientData, HEADER);

export const deleteClient = (clientId) =>
    axios.delete(`${CLIENTS_URL}/${clientId}`, HEADER2);
