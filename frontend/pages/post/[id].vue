<template>
  <div class="bg-surface pb-16" style="min-height: 100vh;">
    <!-- Top Progress Bar -->
    <v-progress-linear color="tertiary" model-value="15" height="4" fixed top style="z-index: 1000;"></v-progress-linear>

    <v-container fluid class="pt-8 pt-md-16 px-4 px-md-8 mx-auto" style="max-width: 1280px">
      <v-row>
        <!-- Left Sidebar (TOC) -->
        <v-col cols="12" md="3" class="d-none d-md-block pr-8">
          <TOCSidebar />
        </v-col>

        <!-- Main Content -->
        <v-col cols="12" md="6" lg="7" class="px-md-8 px-lg-12 border-left border-right border-surface-low pr-md-10">
          <article v-if="post">
            <header class="mb-12">
              <v-chip color="primary" variant="tonal" size="small" class="mb-6 font-weight-bold text-uppercase" style="letter-spacing: 0.1em">
                {{ post.category }}
              </v-chip>

              <h1 class="text-h3 text-md-h2 font-weight-black font-display text-primary mb-6 text-wrap" style="line-height: 1.15;">
                {{ post.title }}
              </h1>
              
              <p class="text-h6 text-secondary font-weight-regular font-body mb-8" style="line-height: 1.6;">
                {{ post.excerpt }}
              </p>

              <div class="d-flex align-center py-4 border-top border-bottom border-surface-low">
                <v-avatar size="48" class="mr-4">
                  <v-img :src="post.authorImage"></v-img>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-body-1">{{ post.author }}</div>
                  <div class="text-secondary text-body-2">{{ post.date }} &middot; {{ post.readTime }} read</div>
                </div>
              </div>
            </header>

            <div class="post-body font-body text-primary text-body-1" style="line-height: 1.9;" v-html="post.content">
            </div>

            <v-divider class="my-10"></v-divider>

            <footer class="d-flex justify-space-between align-center">
              <div class="d-flex gap-2">
                <v-chip v-for="tag in post.tags" :key="tag" variant="tonal" class="text-caption font-weight-medium text-secondary">
                  #{{ tag }}
                </v-chip>
              </div>
              <div class="d-flex gap-4">
                <v-btn variant="text" prepend-icon="mdi-hand-clap" color="secondary">{{ post.likes }}</v-btn>
                <v-btn variant="text" prepend-icon="mdi-comment-text-outline" color="secondary">{{ comments.length }} Responses</v-btn>
              </div>
            </footer>

            <!-- Comments Section -->
            <section class="mt-16">
              <h3 class="text-h5 font-weight-bold font-display mb-8">Comments ({{ comments.length }})</h3>
              
              <!-- Add Comment Input -->
              <div class="d-flex mb-10">
                <v-avatar size="48" class="mr-4">
                  <v-img src="https://i.pravatar.cc/150?img=12" alt="Current User"></v-img>
                </v-avatar>
                <v-form @submit.prevent="submitComment" class="flex-grow-1">
                  <v-textarea
                    v-model="newComment"
                    placeholder="Write a comment..."
                    variant="solo-filled"
                    flat
                    auto-grow
                    rows="2"
                    bg-color="surface-low"
                    class="mb-2"
                  ></v-textarea>
                  <div class="d-flex justify-end">
                    <v-btn 
                      color="primary" 
                      type="submit" 
                      :disabled="!newComment.trim()"
                      rounded="pill"
                      elevation="0"
                    >Post Comment</v-btn>
                  </div>
                </v-form>
              </div>

              <!-- Comments List -->
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item v-for="comment in comments" :key="comment.id" class="px-0 mb-8 py-0 align-start">
                  <template v-slot:prepend>
                    <v-avatar size="48" class="mr-4 mt-1">
                      <v-img :src="comment.authorImage"></v-img>
                    </v-avatar>
                  </template>
                  
                  <v-list-item-title class="font-weight-bold text-body-1 mb-1">
                    {{ comment.author }}
                    <span class="text-caption text-secondary font-weight-regular ml-2">{{ comment.date }}</span>
                  </v-list-item-title>
                  
                  <div class="text-body-1 text-primary font-body" style="line-height: 1.6; white-space: pre-wrap;">
                    {{ comment.content }}
                  </div>
                  
                  <div class="mt-2 d-flex gap-4">
                    <v-btn variant="text" size="small" density="comfortable" prepend-icon="mdi-thumb-up-outline" color="secondary">Like</v-btn>
                    <v-btn variant="text" size="small" density="comfortable" prepend-icon="mdi-reply" color="secondary">Reply</v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </section>
          </article>
        </v-col>

        <!-- Right Sidebar (Author/Related) -->
        <v-col cols="12" md="3" lg="2" class="d-none d-lg-block pl-8">
          <v-card class="bg-surface-low pa-5 border" elevation="0" rounded="xl">
            <h4 class="text-caption font-weight-bold text-uppercase text-secondary mb-4" style="letter-spacing: 0.1em">About the Author</h4>
            <v-avatar size="64" class="mb-4">
              <v-img :src="post.authorImage"></v-img>
            </v-avatar>
            <h3 class="font-weight-bold text-body-1 mb-1">{{ post.author }}</h3>
            <p class="text-caption text-secondary mb-4" style="line-height: 1.5;">
              Software architect passionate about functional programming and robust system design. Currently building tools for developers.
            </p>
            <v-btn variant="outlined" color="primary" rounded block size="small" class="font-weight-bold">
              Follow
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TOCSidebar from '../../components/organisms/TOCSidebar.vue';

const route = useRoute();

const newComment = ref('');

const submitComment = () => {
  if (!newComment.value.trim()) return;
  comments.value.unshift({
    id: Date.now(),
    author: 'Current User',
    authorImage: 'https://i.pravatar.cc/150?img=12',
    date: 'Just now',
    content: newComment.value
  });
  newComment.value = '';
};

// Mock data for demonstration
const post = {
  id: route.params.id,
  title: 'Architecting for Resilience: Lessons from the Field',
  excerpt: 'Stability in complex systems isn\'t about preventing failure; it\'s about designing for graceful degradation. In this deep dive, we explore how to build resilient applications that can withstand the chaos of the real world.',
  author: 'Alex River',
  authorImage: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  date: 'Oct 22, 2026',
  readTime: '12 min',
  category: 'Architecture',
  likes: '2.4k',
  tags: ['systems', 'resilience', 'architecture', 'design'],
  content: `
    <h2 class="text-h4 font-weight-bold font-display mt-8 mb-4">Introduction to Resilient Architecture</h2>
    <p class="mb-6">In the world of distributed systems, failure is not an "if," but a "when." The difference between a system that crashes and one that simply degrades is <strong>architectural intent</strong>.</p>
    
    <p class="mb-6">When we first started building planetary-scale applications, the primary focus was always on uptime. But as systems grew more complex, we realized that 100% uptime is an expensive myth.</p>

    <div class="bg-surface-low pa-6 rounded-lg mb-8 my-8 border-left-tertiary">
      <blockquote class="text-h6 font-weight-medium font-body text-secondary" style="line-height: 1.6; font-style: italic;">
        "The goal is not to eliminate errors, but to isolate them and prevent cascading failures across the entire ecosystem."
      </blockquote>
    </div>

    <h2 class="text-h4 font-weight-bold font-display mt-8 mb-4">1. The Circuit Breaker Pattern</h2>
    <p class="mb-6">Much like its electrical namesake, the circuit breaker pattern prevents a single service failure from cascading through your entire stack. By failing fast and providing a fallback, you maintain system availability even during partial outages.</p>
    
    <p class="mb-6">Here is an example of what it looks like in practice:</p>
    
    <div class="bg-primary pa-4 rounded-lg mb-8 text-white font-mono text-body-2 overflow-x-auto">
      <pre><code>// Simple circuit breaker implementation
class CircuitBreaker {
  constructor(request, options) {
    this.request = request;
    this.state = 'CLOSED';
    this.failureThreshold = options.failureThreshold || 3;
    // ...
  }
}</code></pre>
    </div>

    <h2 class="text-h4 font-weight-bold font-display mt-8 mb-4">Conclusion</h2>
    <p class="mb-6">Throughout my decade of building planetary-scale applications, I've seen that the most resilient systems are those that treat failure as a first-class citizen in their code. It requires a shift in mindset from traditional defensive programming to embracing failure domains.</p>
  `,
};

const comments = ref([
  {
    id: 1,
    author: 'Sarah Chen',
    authorImage: 'https://i.pravatar.cc/150?u=a04258114e29026702',
    date: '2 hours ago',
    content: 'Great insight on the circuit breaker pattern. Have you considered looking into how service meshes like Istio handle this transparently?'
  },
  {
    id: 2,
    author: 'Marcus Johnson',
    authorImage: 'https://i.pravatar.cc/150?u=a04258114e29026703',
    date: '5 hours ago',
    content: 'The point about graceful degradation cannot be overstated. So many systems fail completely just because an optional dependency is down.'
  }
]);
</script>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.font-body {
  font-family: var(--font-body);
}
.border-left-tertiary {
  border-left: 4px solid var(--color-tertiary);
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
</style>
