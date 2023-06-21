import axios from "axios";

// comment the production api url and uncomment the local url to use local host
// const REACT_APP_BACKEND_URL = 'http://127.0.0.1:8000/api/'
const REACT_APP_BACKEND_URL = 'https://tms-api.up.railway.app/api/'



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
    });

    return served;
};

export {
    ServerRequest
};