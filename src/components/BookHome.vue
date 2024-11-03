<template>
    <Loading />
    <v-alert v-if="ApplicationStore.hasError" :text=ApplicationStore.errorMessage type="error"></v-alert>
    <div class="ma-4">
        <div class="text-center text-h4 my-4">
            Bupa Book App
        </div>
        <div class="text-center my-2 d-flex justify-space-between align-center">
            <div class="w-25">
                <v-select label="Book type" v-model="ApplicationStore.bookType" :items="BookTypeList"
                    item-title="text" item-value="id"></v-select>
            </div>
            <v-btn class="ms-2" color="success" @click="fetchBooks(ApplicationStore.bookType)">Get Books</v-btn>
        </div>
        <BookItemList :categorisedBookList="categorisedBookList" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CategorisedBookList from '@/models/CategorisedBookList';
import BookItemList from './BookItemList.vue';
import { getBooks } from '@/api/ApiClient';
import { ApplicationStore } from '@/stores/ApplicationStore';
import Loading from './Loading.vue';
import { BookTypeEnum, BookTypeList } from '@/models/BookTypeEnum';

const categorisedBookList = ref<CategorisedBookList | undefined>();

    async function fetchBooks(bookType: BookTypeEnum) {
        try {
            ApplicationStore.value.loading = true;
            categorisedBookList.value = undefined;
            ApplicationStore.value.bookType = bookType;
            const response = await getBooks<CategorisedBookList>(`/books?bookType=${bookType}`);
            if (response.isSuccess) {
                ApplicationStore.value.hasError = false;
                categorisedBookList.value = response.result;
            }
            else {
                ApplicationStore.value.errorMessage = `An error occurred while fetching books. Error: ${response.error}`;
                ApplicationStore.value.hasError = true;
            }
        }
        catch (error) {
            ApplicationStore.value.hasError = true;
            const errorMessage = `${error?.response?.data?.error} Please try again.`;
            ApplicationStore.value.errorMessage = errorMessage;
            console.log(errorMessage);
        }
        finally {
            ApplicationStore.value.loading = false;
        }
    }
</script>
