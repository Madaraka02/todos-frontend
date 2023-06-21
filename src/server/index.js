import axios from "axios";

const REACT_APP_BACKEND_URL = 'http://127.0.0.1:8000/'


export const hostApi = () => {
    return REACT_APP_BACKEND_URL;
};

const urlV1 = hostApi() + "v1/";


const serverUrl = (version = "v1") => {
    if (version === "v1") {
        return urlV1;
    } 
};


const ServerRequest = (version = "v1") => {
    const served = axios.create({
        baseURL: serverUrl(version),
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    });

    return served;
};

export {
    ServerRequest
};