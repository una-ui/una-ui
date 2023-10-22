<script setup lang="ts">
const options = ref([
  {
    value: true,
    label: 'Vue',
    class: 'n-checked:bg-green-500/30 n-checked:border-green-500',
    checkbox: 'green',
    una: {
      checkboxIcon: 'i-logos-vue n-checked:scale-150 transition-transform duration-1000',
    },
  },
  {
    value: false,
    label: 'React',
    class: 'n-checked:bg-blue-500/30 n-checked:border-blue-500',
    checkbox: 'blue',
    una: {
      checkboxIcon: 'i-logos-react  n-checked:rotate-360 transition-transform duration-1000',
    },
  },
  {
    value: false,
    label: 'Angular',
    class: 'n-checked:bg-red-500/30 n-checked:border-red-500',
    checkbox: 'red',
    una: {
      checkboxIcon: 'i-logos-angular-icon n-checked:scale-150 transition-transform duration-1000',
    },
  },
])

const optionsValue = computed(() => options.value.map(option => option.value))
</script>

<template>
  <div class="flex flex-col space-y-6">
    <span>
      Value: {{ optionsValue }}
    </span>

    <div class="flex flex-wrap gap-4">
      <NCheckbox
        v-for="(option, i) in options"
        :key="i"
        v-model="option.value"
        :checkbox="option.checkbox"
        size="15"
        :label="option.label"
        :class="option.class"
        class="rounded-md"
        :una="option.una"
      />
    </div>
  </div>
</template>
