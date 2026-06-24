<template>
  <v-app-bar app color="surface" elevation="1" class="px-md-4">
    <v-container fluid class="d-flex align-center px-0 py-0" style="max-width: 1280px">
      <!-- Logo -->
      <NuxtLink to="/home" class="text-decoration-none d-flex align-center text-primary font-weight-bold font-display text-h6 mr-6">
        <v-icon icon="mdi-source-branch" color="primary" class="mr-2"></v-icon>
        CommitMe365
      </NuxtLink>

      <!-- Navigation Links -->
      <div class="d-none d-sm-flex align-center gap-4">
        <v-btn variant="text" to="/home" exact class="text-capitalize font-weight-medium text-secondary" rounded>
          Home
        </v-btn>
        <v-btn variant="text" to="/editor" class="text-capitalize font-weight-medium text-secondary" rounded>
          Write
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Search and Actions -->
      <div class="d-flex align-center gap-2">
        <v-text-field
          density="compact"
          variant="solo-filled"
          placeholder="Search items..."
          prepend-inner-icon="mdi-magnify"
          single-line
          hide-details
          class="d-none d-md-block mr-4"
          bg-color="background"
          flat
          rounded="pill"
          style="width: 250px"
        ></v-text-field>

        <v-btn icon="mdi-magnify" class="d-md-none bg-surface-low mr-2"></v-btn>
        <v-btn icon="mdi-menu" class="d-sm-none"></v-btn>
        
        <template v-if="isAuthenticated">
          <v-avatar color="primary" size="36" class="cursor-pointer">
            <span class="text-white text-caption">{{ user?.email?.charAt(0).toUpperCase() }}</span>
          </v-avatar>
          <v-btn
            variant="outlined"
            color="primary"
            rounded
            class="text-none px-4 px-sm-6 font-weight-bold"
            prepend-icon="mdi-logout"
            @click="logout"
          >
            Logout
          </v-btn>
        </template>
        <v-btn v-else to="/" variant="flat" color="primary" rounded class="text-none px-6 font-weight-bold d-none d-sm-flex">
          Sign In
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const { user, isAuthenticated, logout } = useAuth();
</script>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.gap-4 {
  gap: 16px;
}
.gap-2 {
  gap: 8px;
}
</style>
