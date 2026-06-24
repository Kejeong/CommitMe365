<template>
  <v-card 
    class="post-card h-100 d-flex flex-column transition-swing" 
    :to="`/post/${id}`"
    elevation="0" 
    border 
    rounded="xl"
    color="surface"
  >
    <!-- Image placeholder -->
    <v-img
      v-if="image"
      :src="image"
      height="200"
      cover
      class="bg-surface-low"
    ></v-img>

    <v-card-item class="px-5 pt-5 pb-2">
      <v-chip size="x-small" color="primary" variant="tonal" class="mb-3 text-uppercase font-weight-bold" style="letter-spacing: 0.05em">
        {{ category }}
      </v-chip>
      
      <v-card-title class="text-h6 font-weight-bold font-display text-wrap mb-2" style="line-height: 1.3;">
        {{ title }}
      </v-card-title>
    </v-card-item>

    <v-card-text class="px-5 flex-grow-1 font-body text-secondary text-body-2" style="max-height: 80px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
      {{ excerpt }}
    </v-card-text>

    <v-divider class="mx-5 my-2"></v-divider>

    <v-card-actions class="px-5 pb-5 pt-2 d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <v-avatar size="24" class="mr-2">
          <v-img :src="authorImage || 'https://i.pravatar.cc/150?u=' + author"></v-img>
        </v-avatar>
        <div class="text-caption font-weight-medium text-primary">{{ author }}</div>
      </div>
      
      <div class="d-flex align-center text-caption text-secondary">
        <span>{{ date }}</span>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  id: { type: [String, Number], required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, required: true },
  authorImage: { type: String },
  date: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String }
});
</script>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.font-body {
  font-family: var(--font-body);
}
.post-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-tertiary) !important;
  box-shadow: 0 24px 48px -28px rgba(0, 0, 0, 0.95) !important;
}
</style>
