<script setup lang="ts">
const radio = ref()

const options = [
  {
    value: 'vue',
    class: 'n-checked:bg-green-500/30 n-checked:border-green-500',
    radio: 'green',
    una: {
      radioIcon: 'i-logos-vue n-checked:scale-200 transition-transform duration-1000',
    },
  },
  {
    value: 'react',
    class: 'n-checked:bg-blue-500/30 n-checked:border-blue-500',
    radio: 'blue',
    una: {
      radioIcon: 'i-logos-react  n-checked:rotate-360 transition-transform duration-1000',
    },
  },
  {
    value: 'angular',
    class: 'n-checked:bg-red-500/30 n-checked:border-red-500',
    radio: 'red',
    una: {
      radioIcon: 'i-logos-angular-icon n-checked:scale-150 transition-transform duration-1000',
    },
  },
]
</script>

<template>
  <div class="flex flex-col space-y-6">
    <span>
      Value: {{ radio }}
    </span>

    <div class="flex flex-wrap gap-4">
      <NRadio
        v-for="option in options"
        :key="option.value"
        v-model="radio"
        :value="option.value"
        :radio="option.radio"
        :label="option.value"
        :class="option.class"
        size="15"
        class="rounded-md"
        :una="{
          radioLabel: 'capitalize',
          ...option.una,
        }"
      />
    </div>
  </div>
</template>
