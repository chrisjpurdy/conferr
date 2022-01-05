import axios, {AxiosPromise} from "axios";
import {API_PATH} from "./constants";
import {UserDTO} from "../app/APITypes";

export const endpoint = axios.create({
    baseURL: API_PATH,
    withCredentials: true,
});

endpoint.interceptors.response.use((response) => {
    if (response.status >= 500) {
        // eslint-disable-next-line no-console
        console.warn("Uncaught error from API:", response);
    }
    return response;
}, (error) => {
    if (error.response && error.response.status >= 500 && !error.response.data.bypassGenericSiteErrorPage) {
        if (error.response.status == 502) {
            // A '502 Bad Gateway' response means that the API no longer exists:
            //handleApiGoneAway();
        } else {
            //handleServerError();
        }
        // eslint-disable-next-line no-console
        console.warn("Error from API:", error);
    }
    return Promise.reject(error);
});

export const api = {
    user: {
        getCurrent: (): AxiosPromise<UserDTO> => {
            return endpoint.get(`/users/current_user`);
        },
    }
}