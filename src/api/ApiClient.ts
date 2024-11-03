import axiosInstance from './axios-instance';
import ApiResponse from '@/models/ApiResponse';

export async function getBooks<T>(url: string, params?: number): Promise<ApiResponse<T>> {
    const response = await axiosInstance.get<ApiResponse<T>>(url, { params });
    return response.data;
}