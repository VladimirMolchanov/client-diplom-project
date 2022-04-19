import axios from "axios";
import { useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";
import configFile from "../../../config.json";
import localStorageService from "./localStorageService";
import authService from "./auth.service";
import { getIsLoggedIn } from "../store/users";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(async function (config) {
    const logged = useSelector(getIsLoggedIn());
    if (logged) {
        const expiresDate = localStorageService.getTokenExpiresDate();
        const refreshToken = localStorageService.getRefreshToken();

        if (refreshToken && expiresDate < Date.now()) {
            const { data } = await authService.refresh();
            localStorageService.setTokens({
                refreshToken: data.refreshToken,
                accessToken: data.accessToken,
                expiresIn: data.expiresIn,
                userId: data.userId
            });
        }
        const accessToken = localStorageService.getAccessToken();
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`
            };
        }
    }

    return config;
});

http.interceptors.response.use(
    (res) => {
        res.data = { content: res.data };
        return res;
    },
    (error) => {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (error.response.status === 401) {
            localStorageService.removeAuthData();
        }
        if (!expectedErrors) {
            console.log(error);
            // Вывод ошибки запроса на публичную часть
            NotificationManager.error(error.toString());
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};

export default httpService;
