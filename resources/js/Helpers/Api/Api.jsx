import Cookies from "js-cookie";

export const BASE_URL = "http://127.0.0.1:8000/api/";
export const IncludeAll = "includeAll=true";

export const HEADER = {
    headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
        "Content-Type": "application/json",
    },
};

export const HEADER2 = {
    headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
        "Content-Type": "application/json",
    },
};
