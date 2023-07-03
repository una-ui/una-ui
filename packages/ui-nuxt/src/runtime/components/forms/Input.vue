<script setup lang="ts">
interface Props {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  isError?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits(['update:modelValue'])

function onInput(event: InputEvent) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :type="type"
    :class="[
      !isError ? 'input-outline' : 'input-solid-error',
    ]"
    @input="onInput($event as InputEvent)"
  >
</template>
