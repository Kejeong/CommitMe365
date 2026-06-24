<template>
  <button
    :class="['app-button', `variant-${variant}`, { loading, disabled }]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="loader"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, ghost, accent
  },
  loading: Boolean,
  disabled: Boolean,
});

defineEmits(['click']);
</script>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  outline: none;
  gap: 0.5rem;
  white-space: nowrap;
}

.variant-primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.variant-primary:hover {
  background-color: var(--color-surface-high);
}

.variant-secondary {
  background-color: var(--color-surface-low);
  color: var(--color-primary);
}

.variant-accent {
  background-color: var(--color-tertiary);
  color: var(--color-on-tertiary);
}

.variant-ghost {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-outline-variant);
}

.variant-ghost:hover {
  background-color: var(--color-surface-low);
}

.app-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loader {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
