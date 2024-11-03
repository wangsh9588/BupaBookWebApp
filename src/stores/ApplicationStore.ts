import { ref } from 'vue';
import ApplicationStatus from "@/models/ApplicationStatus";
import { BookTypeEnum } from '@/models/BookTypeEnum';

export const ApplicationStore = ref<ApplicationStatus>({
    hasError: false,
    errorMessage: '',
    loading: false,
    bookType: BookTypeEnum.All
});