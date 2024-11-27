<script setup lang="ts">
const options = ref([
  { value: 'react', icon: 'i-logos-react', radioGroup: 'sky' },
  { value: 'vue', icon: 'i-logos-vue', radioGroup: 'green' },
  { value: 'angular', icon: 'i-logos-angular-icon', radioGroup: 'red' },
  { value: 'svelte', icon: 'i-logos-svelte-icon', radioGroup: 'orange' },
])
const value = ref('vue')
</script>

<template>
  <NRadioGroup
    v-model="value"
    :items="options"
    orientation="horizontal"
    class="justify-around"
    size="12"
    :una="{
      radioGroupItem: 'data-[state=checked]:scale-150 transition-transform duration-1000',
    }"
  />
</template>
