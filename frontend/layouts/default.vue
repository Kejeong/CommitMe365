<template>
  <div class="app-layout">
    <AppNavbar />
    <v-main>
      <v-container fluid class="px-0 py-0">
        <slot />
      </v-container>
    </v-main>
    <v-footer app border="top" class="bg-surface-low text-secondary text-center py-4 d-flex justify-center">
      <p>&copy; 2026 CommitMe365. Built with passion.</p>
    </v-footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-md);
}

.app-footer {
  padding: var(--spacing-lg) 0;
  background: var(--color-surface-low);
  text-align: center;
  color: var(--color-secondary);
  font-size: 0.875rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
</style>
