<script setup lang="ts">
interface Props {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  isError?: boolean
  placeholder?: string
  id?: string
  name?: string

  // nv: {
  //   input?: string
  //   inputOutline?: string
  //   inputSolidError?: string
  // }
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
  <div input="wrapper">
    <input
      v-bind="$attrs"
      :id="id ?? name"
      :value="modelValue"
      :type="type"
      :class="[
        !isError ? 'input-outline' : 'input-solid-error',
      ]"
      :placeholder="placeholder"
      :name="name ?? id"
      @input="onInput($event as InputEvent)"
    >
  </div>
</template>
