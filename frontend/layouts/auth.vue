<template>
  <v-main class="bg-background">
    <v-row no-gutters class="fill-height">
      <!-- Left side: Brand Image -->
      <v-col cols="12" md="6" class="d-none d-md-flex brand-side position-relative overflow-hidden">
        <v-img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          cover
          class="fill-height fill-width"
        >
          <div class="overlay fill-height fill-width d-flex flex-column pa-10 justify-end">
            <h2 class="text-white text-h3 font-weight-bold mb-4 font-display">
              Where code<br>meets story.
            </h2>
            <p class="text-white text-body-1 opacity-80" style="max-width: 400px;">
              Join a community of developers documenting their journey, one commit at a time.
            </p>
          </div>
        </v-img>
      </v-col>

      <!-- Right side: Auth Form Slot -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center pa-8">
        <div class="auth-container">
          <div class="mb-10 text-center text-md-left">
            <NuxtLink to="/" class="text-h5 font-weight-bold font-display text-primary text-decoration-none d-inline-flex align-center mb-10">
              <v-icon icon="mdi-source-branch" class="mr-2" size="small"></v-icon>
              CommitMe365
            </NuxtLink>
            <slot name="header"></slot>
          </div>
          
          <slot />
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>
.brand-side::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.4), transparent);
  pointer-events: none;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.auth-container {
  width: 100%;
  max-width: 440px;
}

.font-display {
  font-family: var(--font-display);
}
</style>
