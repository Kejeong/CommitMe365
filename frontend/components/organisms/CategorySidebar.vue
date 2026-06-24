<template>
  <v-card class="category-sidebar transparent" flat>
    <!-- Discover Header -->
    <h3 class="text-h6 font-weight-bold font-display text-primary mb-6">Discover</h3>
    
    <!-- Navigation List -->
    <v-list class="bg-transparent pa-0" slim>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.to"
        :value="item.title"
        color="primary"
        rounded="lg"
        class="mb-1"
        :class="isActive(item) ? 'bg-surface font-weight-bold' : 'text-secondary'"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" size="small" class="mr-3"></v-icon>
        </template>
        <v-list-item-title class="font-body text-body-2">{{ item.title }}</v-list-item-title>
        <template v-slot:append v-if="item.badge">
          <v-chip size="x-small" color="primary" variant="flat">{{ item.badge }}</v-chip>
        </template>
      </v-list-item>
    </v-list>

    <div class="my-6">
      <v-divider></v-divider>
    </div>

    <!-- Topics Header -->
    <h3 class="text-subtitle-2 font-weight-bold text-secondary text-uppercase mb-4 label-tech">Topics</h3>
    
    <v-list class="bg-transparent pa-0" slim>
      <v-list-item
        v-for="topic in topics"
        :key="topic"
        value="topic"
        color="primary"
        rounded="lg"
        class="mb-1 text-secondary"
      >
        <template v-slot:prepend>
          <div class="hashtag mr-3">#</div>
        </template>
        <v-list-item-title class="font-body text-body-2">{{ topic }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { title: 'For You', icon: 'mdi-star-outline', to: '/', badge: 'New' },
  { title: 'Trending', icon: 'mdi-trending-up', to: '/trending' },
  { title: 'Following', icon: 'mdi-account-group-outline', to: '/following' },
  { title: 'Bookmarks', icon: 'mdi-bookmark-outline', to: '/bookmarks' },
]

const topics = [
  'Frontend', 'Backend', 'DevOps', 'Architecture', 'Career', 'AI & Machine Learning'
]

const isActive = (item) => route.path === item.to
</script>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.font-body {
  font-family: var(--font-body);
}
.hashtag {
  font-weight: bold;
  color: var(--color-outline);
}
.label-tech {
  letter-spacing: 0.1em;
}
</style>
