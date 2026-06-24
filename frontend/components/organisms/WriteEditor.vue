<template>
  <v-card class="write-editor d-flex flex-column h-100" elevation="0" color="transparent">
    <div class="mb-6">
      <v-text-field
        v-model="title"
        placeholder="Enter your title..."
        variant="plain"
        class="text-h3 font-weight-black font-display title-input"
        hide-details
      ></v-text-field>
    </div>

    <v-toolbar color="surface" elevation="1" rounded="lg" class="mb-6 px-2" density="compact">
      <v-btn icon="mdi-format-bold" variant="text" size="small" class="text-secondary"></v-btn>
      <v-btn icon="mdi-format-italic" variant="text" size="small" class="text-secondary"></v-btn>
      <v-btn icon="mdi-format-underline" variant="text" size="small" class="text-secondary"></v-btn>
      <v-divider vertical class="mx-2 my-2"></v-divider>
      <v-btn icon="mdi-format-list-bulleted" variant="text" size="small" class="text-secondary"></v-btn>
      <v-btn icon="mdi-format-list-numbered" variant="text" size="small" class="text-secondary"></v-btn>
      <v-divider vertical class="mx-2 my-2"></v-divider>
      <v-btn icon="mdi-link" variant="text" size="small" class="text-secondary"></v-btn>
      <v-btn icon="mdi-image-outline" variant="text" size="small" class="text-secondary"></v-btn>
      <v-btn icon="mdi-code-tags" variant="text" size="small" class="text-secondary"></v-btn>
    </v-toolbar>

    <v-textarea
      v-model="content"
      placeholder="Share your insights with the world..."
      variant="plain"
      class="flex-grow-1 font-body text-body-1 content-area"
      hide-details
      rows="10"
      auto-grow
    ></v-textarea>

    <v-divider class="my-6"></v-divider>

    <div class="d-flex justify-space-between align-center">
      <v-btn variant="text" color="error" class="font-weight-bold text-none" @click="$emit('cancel')">Cancel</v-btn>
      
      <div class="d-flex align-center gap-3">
        <v-btn variant="tonal" color="secondary" class="font-weight-bold text-none rounded-lg" @click="$emit('save-draft')">Save Draft</v-btn>
        <v-btn variant="flat" color="primary" class="font-weight-bold text-none rounded-lg px-6" @click="publish">Publish</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');
const content = ref('');

const emit = defineEmits(['publish', 'cancel', 'save-draft']);

const publish = () => {
  emit('publish', {
    title: title.value,
    content: content.value,
  });
};
</script>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.font-body {
  font-family: var(--font-body);
}
.gap-3 {
  gap: 12px;
}
.title-input :deep(input) {
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
  font-family: var(--font-display);
  font-weight: 800;
}
.content-area :deep(textarea) {
  line-height: 1.8 !important;
}
</style>
