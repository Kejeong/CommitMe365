<template>
  <v-card class="hero-article position-relative rounded-xl overflow-hidden mb-8" elevation="0" style="min-height: 400px;">
    <v-img
      :src="image"
      cover
      class="fill-height position-absolute w-100"
    ></v-img>
    
    <!-- Gradient Overlay -->
    <div class="overlay position-absolute w-100 h-100"></div>

    <div class="content position-relative pa-6 pa-md-10 d-flex flex-column justify-end h-100" style="min-height: 400px; z-index: 2;">
      <div>
        <v-chip color="tertiary" variant="flat" size="small" class="font-weight-bold text-uppercase mb-4">
          Featured
        </v-chip>
        <h2 class="text-h4 text-md-h3 font-weight-black text-white font-display mb-4" style="max-width: 800px; line-height: 1.2;">
          {{ title }}
        </h2>
        <p class="text-body-1 text-white opacity-80 mb-6 font-body" style="max-width: 600px;">
          {{ excerpt }}
        </p>
        
        <div class="d-flex align-center">
          <v-avatar size="40" class="mr-3 border-2 border-white">
            <v-img :src="authorImage" cover></v-img>
          </v-avatar>
          <div>
            <div class="text-subtitle-2 text-white font-weight-bold">{{ authorName }}</div>
            <div class="text-caption text-white opacity-70">{{ date }} &middot; {{ readTime }} read</div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  authorName: { type: String, required: true },
  authorImage: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true }
})
</script>

<style scoped>
.overlay {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0) 100%);
  top: 0;
  left: 0;
}

.font-display {
  font-family: var(--font-display);
}
.font-body {
  font-family: var(--font-body);
}
</style>
