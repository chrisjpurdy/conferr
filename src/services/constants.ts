/*
 * Configure the api provider with the server running the API:
 * No need if we want to use the same server as the static content.
 */
let apiPath = `${document.location.origin}/api`;
if (document.location.hostname === "localhost") {
    apiPath = "http://localhost:8080/isaac-api/api";
} else if (document.location.hostname.endsWith(".eu.ngrok.io")) {
    apiPath = "https://isaacscience.eu.ngrok.io/isaac-api/api";
}
export const isTest = document.location.hostname.startsWith("test.");

export const API_PATH: string = apiPath;

export enum ACTION_TYPE {
    USER_LOG_IN_REQUEST = "USER_LOG_IN_REQUEST",
    USER_LOG_IN_RESPONSE_SUCCESS = "USER_LOG_IN_RESPONSE_SUCCESS",
    USER_LOG_IN_RESPONSE_FAILURE = "USER_LOG_IN_RESPONSE_FAILURE",

    USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
    USER_UPDATE_RESPONSE_SUCCESS = "USER_UPDATE_RESPONSE_SUCCESS",
    USER_UPDATE_RESPONSE_FAILURE = "USER_UPDATE_RESPONSE_FAILURE",

    USER_DETAILS_UPDATE_REQUEST = "USER_DETAILS_UPDATE",
    USER_DETAILS_UPDATE_RESPONSE_SUCCESS = "USER_DETAILS_UPDATE_RESPONSE_SUCCESS",
    USER_DETAILS_UPDATE_RESPONSE_FAILURE = "USER_DETAILS_UPDATE_RESPONSE_FAILURE",

    USER_LOG_OUT_REQUEST = "USER_LOG_OUT_REQUEST",
    USER_LOG_OUT_RESPONSE_SUCCESS = "USER_LOG_OUT_RESPONSE_SUCCESS",
    USER_LOG_OUT_EVERYWHERE_REQUEST = "USER_LOG_OUT_EVERYWHERE_REQUEST",
    USER_LOG_OUT_EVERYWHERE_RESPONSE_SUCCESS = "USER_LOG_OUT_EVERYWHERE_RESPONSE_SUCCESS",
}