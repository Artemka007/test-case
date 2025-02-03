import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:4200/api/v1/seminars',
    withCredentials: true,
});
