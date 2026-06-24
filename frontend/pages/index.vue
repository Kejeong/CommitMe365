<template>
  <NuxtLayout name="auth">
    <template #header>
      <h1 class="text-h4 font-weight-bold mb-2">Welcome Back</h1>
      <p class="text-secondary text-body-2">Please enter your details to sign in.</p>
    </template>

    <v-form @submit.prevent="handleLogin" class="mt-8">
      <!-- 로그인 실패 에러 메시지 -->
      <v-alert
        v-if="errorMessage"
        type="error"
        variant="tonal"
        class="mb-4"
        density="compact"
      >
        {{ errorMessage }}
      </v-alert>

      <v-text-field
        v-model="email"
        label="Email Address"
        placeholder="curator@commitme365.com"
        type="email"
        variant="outlined"
        color="primary"
        density="comfortable"
        class="mb-4"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        placeholder="••••••••"
        type="password"
        variant="outlined"
        color="primary"
        density="comfortable"
        class="mb-2"
        hide-details="auto"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <div class="d-flex justify-space-between align-center mb-6">
        <v-checkbox
          v-model="rememberMe"
          label="Remember for 30 days"
          color="primary"
          hide-details
          density="compact"
          class="text-body-2"
        ></v-checkbox>
        <NuxtLink to="/forgot-password" class="text-body-2 text-decoration-none text-primary font-weight-medium">
          Forgot password?
        </NuxtLink>
      </div>

      <v-btn
        type="submit"
        color="primary"
        size="x-large"
        block
        flat
        class="text-none font-weight-bold mb-6 rounded-lg"
        :loading="isSubmitting"
      >
        Sign in
      </v-btn>

      <v-btn
        variant="outlined"
        color="secondary"
        size="x-large"
        block
        class="text-none font-weight-bold rounded-lg"
        prepend-icon="mdi-google"
      >
        Sign in with Google
      </v-btn>

      <v-divider class="my-8">
        <span class="text-caption text-secondary px-2">New to CommitMe365?</span>
      </v-divider>

      <v-btn
        to="/signup"
        variant="tonal"
        color="secondary"
        size="x-large"
        block
        class="text-none font-weight-bold rounded-lg"
      >
        Create an account
      </v-btn>
    </v-form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigateTo } from 'nuxt/app';

definePageMeta({
  layout: false // explicitly disable default layout, we are using NuxtLayout manually
});

const config = useRuntimeConfig();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');
const { login } = useAuth();

const handleLogin = async () => {
  if (!email.value || !password.value) return;

  isSubmitting.value = true;
  errorMessage.value = ''; 
  
  const result = await login({
    email: email.value,
    password: password.value,
  });

  if (result.success) {
    navigateTo('/home');
  } else {
    errorMessage.value = result.message || '이메일 또는 비밀번호가 올바르지 않습니다.';
  }
  
  isSubmitting.value = false;
};
</script>
