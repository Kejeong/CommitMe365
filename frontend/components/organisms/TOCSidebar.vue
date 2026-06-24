<template>
  <v-card class="toc-sidebar pt-4 transparent" flat>
    <div class="text-caption font-weight-bold text-uppercase text-secondary mb-4" style="letter-spacing: 0.1em">
      In this Article
    </div>
    
    <v-list class="bg-transparent pa-0" slim>
      <v-list-item
        v-for="(header, index) in headers"
        :key="index"
        :class="activeSection === index ? 'font-weight-bold text-primary active-item' : 'text-secondary'"
        class="mb-2 px-3 toc-item rounded-lg"
        @click="scrollTo(index)"
      >
        <v-list-item-title class="text-body-2" style="white-space: normal; line-height: 1.4;">
          {{ header }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider class="my-6"></v-divider>
    
    <div class="d-flex justify-space-between align-center px-2">
      <v-btn icon="mdi-heart-outline" variant="text" color="secondary" size="small"></v-btn>
      <v-btn icon="mdi-bookmark-outline" variant="text" color="secondary" size="small"></v-btn>
      <v-btn icon="mdi-share-variant-outline" variant="text" color="secondary" size="small"></v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headers = [
  'Introduction to Functional Concepts',
  'State vs Pure Functions',
  'Real-world State Management',
  'The Middle Ground Architecture',
  'Conclusion'
];

const activeSection = ref(0);

const scrollTo = (index: number) => {
  activeSection.value = index;
  // Implementation for scrolling will go here
};
</script>

<style scoped>
.toc-sidebar {
  position: sticky;
  top: 100px;
}
.toc-item {
  border-left: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}
.toc-item:hover {
  background: var(--color-surface-low);
}
.active-item {
  border-left-color: var(--color-tertiary);
  background: var(--color-surface-low);
}
</style>
