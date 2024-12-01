import { error } from "console";
import { apiClient } from "./api";

export async function getUsers(): Promise<any[]> {
    return apiClient
        .get('/users')
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            throw error
        })
    //try {
    //    const response = await apiClient.get('/users')
    //    return response.data.data;
    //}
    //catch {
    //    (error)
    //    console.log(error)
    //    throw error
    //
    //}
}