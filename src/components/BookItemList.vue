<template>
  <v-row justify="center">
    <v-col v-for="(bookCategory, key) in categorisedBookList" :key="key" cols="12" md="6">
      <BookItem :bookCategory="bookCategory" :categoryName="key"/>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import BookItem from './BookItem.vue';
import CategorisedBookList from '@/models/CategorisedBookList';

defineProps<{
  categorisedBookList?: CategorisedBookList
}>();
</script>