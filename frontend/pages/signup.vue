<template>
  <NuxtLayout name="auth">
    <template #header>
      <h1 class="text-h4 font-weight-bold mb-2">Create Account</h1>
      <p class="text-secondary text-body-2">Join CommitMe365 today.</p>
    </template>

    <v-form @submit.prevent="handleSignup" class="mt-8">
      <v-alert
        v-if="errorMessage"
        type="error"
        variant="tonal"
        class="mb-4"
        density="compact"
      >
        {{ errorMessage }}
      </v-alert>

      <v-alert
        v-if="successMessage"
        type="success"
        variant="tonal"
        class="mb-4"
        density="compact"
      >
        {{ successMessage }}
      </v-alert>

      <v-text-field
        v-model="name"
        label="Full Name"
        placeholder="John Doe"
        variant="outlined"
        color="primary"
        density="comfortable"
        class="mb-4"
        hide-details="auto"
      ></v-text-field>

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
        class="mb-6"
        hide-details="auto"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <v-btn
        type="submit"
        color="primary"
        size="x-large"
        block
        flat
        class="text-none font-weight-bold mb-6 rounded-lg"
        :loading="isSubmitting"
      >
        Sign up
      </v-btn>

      <p class="text-center mt-8 text-secondary text-body-2">
        Already have an account? 
        <NuxtLink to="/" class="text-primary font-weight-medium text-decoration-none">
          Sign in
        </NuxtLink>
      </p>
    </v-form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false
});

const name = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const { signup } = useAuth();

const handleSignup = async () => {
  if (!name.value || !email.value || !password.value) {
    errorMessage.value = '모든 필드를 입력해주세요.';
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  const result = await signup({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  if (result.success) {
    successMessage.value = '회원가입이 완료되었습니다! 로그인해주세요.';
    // 2초 후 로그인 페이지로 이동
    setTimeout(() => {
      navigateTo('/');
    }, 2000);
  } else {
    errorMessage.value = result.message;
  }

  isSubmitting.value = false;
};
</script>
