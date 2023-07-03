<script setup lang="ts">
interface Props {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  isError?: boolean
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-bind="$attrs"
    :class="[
      !isError ? 'input-outline' : 'input-solid-error',
    ]"
  >
</template>
