import { BookTypeEnum } from "./BookTypeEnum";

export default class ApplicationStatus {
    hasError: boolean;
    errorMessage: string;
    loading: boolean;
    bookType: BookTypeEnum;
}