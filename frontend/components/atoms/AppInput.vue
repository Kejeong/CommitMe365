<template>
  <div class="app-input-wrapper">
    <label v-if="label" class="label-tech">{{ label }}</label>
    <div class="input-container">
      <input
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        class="field"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <span v-if="error" class="error-text">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  error: String,
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.app-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.input-container {
  display: flex;
  align-items: center;
  background: var(--color-surface);
  border: 1px solid var(--color-outline-variant);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  transition: border-color 0.2s;
}

.input-container:focus-within {
  border-color: var(--color-tertiary);
}

.field {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-on-background);
}

.error-text {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-error));
}
</style>
