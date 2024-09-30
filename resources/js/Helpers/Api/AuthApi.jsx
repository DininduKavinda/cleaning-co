import axios from "axios";

import { BASE_URL, HEADER } from "./Api";


const LOGOUT_URL = BASE_URL + "logout";

const LOGIN_USER = BASE_URL + "auth/login";

// Auth API Services

export const logoutUser = () =>
    axios.get(`${LOGOUT_URL}`, HEADER);

export const loginUser = (data) =>
    axios.post(`${LOGIN_USER}`,data);
