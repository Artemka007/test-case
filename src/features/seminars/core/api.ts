import { apiClient } from "../../../app/api";
import { Seminar } from "./models";

export const getSeminars = () => {
    return apiClient.get<Seminar[]>('/');
};

export const updateSeminar = ({ seminar }: { seminar: Seminar }) => {
    return apiClient.put<Seminar>(`/${seminar.id}/`, seminar);
};

export const deleteSeminar = ({ seminarId }: { seminarId: number }) => {
    return apiClient.delete(`/${seminarId}/`);
};