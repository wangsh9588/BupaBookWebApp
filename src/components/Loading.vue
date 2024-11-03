<template>
    <div class="text-center">
        <v-dialog v-model="ApplicationStore.loading" :scrim="false" persistent width="auto">
            <v-card color="primary">
                <v-card-text>
                    Loading
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script lang="ts" setup>
import { ApplicationStore } from '@/stores/ApplicationStore';
</script>