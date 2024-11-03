<template>
    <v-card class="mx-auto">
        <v-table>
            <thead>
                <tr>
                    <th v-if="categoryName == adultBooks" class="text-left text-h6">
                        Books owned by Adults
                    </th>
                    <th v-else-if="categoryName == childrenBooks" class="text-left text-h6">
                        Books owned by Children
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in bookCategory" :key="item">
                    <td>{{ item }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const adultBooks = ref<string>('adultBooks');
const childrenBooks = ref<string>('childrenBooks');

defineProps<{
    bookCategory: string[],
    categoryName: string
}>();
</script>