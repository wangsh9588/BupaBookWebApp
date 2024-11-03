export default class ApiResponse<T> {
    isSuccess: boolean;
    statusCode: Number;
    result: T;
    error: string
}