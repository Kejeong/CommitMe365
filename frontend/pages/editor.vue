<template>
  <div class="editor-page bg-background pa-4 pa-md-8 d-flex justify-center" style="min-height: calc(100vh - 64px);">
    <v-card class="editor-container w-100 pa-ma-10 pa-6 bg-surface shadow-md" rounded="xl" elevation="2">
      <WriteEditor @publish="handlePublish" @cancel="handleCancel" />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import WriteEditor from '../components/organisms/WriteEditor.vue';
import { navigateTo } from 'nuxt/app';

const handlePublish = (data: any) => {
  console.log('Publishing post:', data);
  navigateTo('/');
};

const handleCancel = () => {
  navigateTo('/');
};
</script>

<style scoped>
.editor-container {
  max-width: 1000px;
}
.shadow-md {
  box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.9) !important;
}
</style>
