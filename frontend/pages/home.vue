<template>
  <div class="pa-4 pa-md-8 bg-background" style="min-height: 100vh;">
    <v-row>
      <!-- Left Sidebar -->
      <v-col cols="12" md="3" lg="2" class="d-none d-md-block pr-6">
        <CategorySidebar />
      </v-col>

      <!-- Main Content -->
      <v-col cols="12" md="9" lg="10">
        <!-- Hero Section -->
        <HeroArticle
          v-bind="heroPost"
        />

        <!-- Grid -->
        <h3 class="text-h6 font-weight-bold font-display text-primary mb-6 mt-8">Recent Stories</h3>
        
        <v-row>
          <v-col v-for="post in posts" :key="post.id" cols="12" sm="6" lg="4">
            <PostCard v-bind="post" />
          </v-col>
        </v-row>

        <div class="d-flex justify-center mt-12">
          <v-btn variant="outlined" color="secondary" rounded class="px-8 font-weight-bold">
            Load More Content
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import CategorySidebar from '../components/organisms/CategorySidebar.vue';
import HeroArticle from '../components/organisms/HeroArticle.vue';
import PostCard from '../components/organisms/PostCard.vue';

const heroPost = {
  title: 'The AI Revolution: How Machine Learning is Reshaping the Modern Developer Ecosystem',
  excerpt: 'Dive deep into the shifting paradigms of software engineering as artificial intelligence moves from an experimental tool to a fundamental architectural requirement.',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
  authorName: 'Elena Rodriguez',
  authorImage: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  date: 'Oct 24',
  readTime: '8 min'
};

const posts = [
  {
    id: 1,
    title: 'Functional Programming in a State-Heavy World',
    excerpt: 'Balancing the purity of functional concepts with the realistic demands of modern, stateful frontend applications.',
    author: 'Alex River',
    authorImage: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    date: 'Oct 22',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'The Art of the Pull Request',
    excerpt: 'Communication is key. How to write PR descriptions that your reviewers will actually enjoy reading.',
    author: 'Sarah Chen',
    authorImage: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    date: 'Oct 21',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Nuxt 3: Server Parts and Edge Rendering',
    excerpt: 'Pushing Vue to the extreme edge. A comprehensive guide to leveraging serverless environments.',
    author: 'Jordan Smith',
    authorImage: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    date: 'Oct 20',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'PostgreSQL 16 Features You Missed',
    excerpt: 'Beyond basic CRUD: Utilizing the latest performance upgrades and JSON features in your database.',
    author: 'David Kim',
    authorImage: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    date: 'Oct 18',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2321&auto=format&fit=crop',
  }
];
</script>
