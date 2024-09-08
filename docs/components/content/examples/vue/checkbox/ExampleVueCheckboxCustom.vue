<script setup lang="ts">
const options = ref([
  {
    value: true,
    label: 'Vue',
    class: 'data-[state=checked]:bg-green-500/30 data-[state=checked]:border-green-500',
    checkbox: 'green',
    una: {
      checkboxCheckedIcon: 'i-logos-vue',
      checkboxIndicator: 'data-[state=checked]:scale-150 transition-transform duration-1000',
    },
  },
  {
    value: true,
    label: 'React',
    class: 'data-[state=checked]:bg-blue-500/30 data-[state=checked]:border-blue-500',
    checkbox: 'blue',
    una: {
      checkboxCheckedIcon: 'i-logos-react',
      checkboxIndicator: 'data-[state=checked]:rotate-360 transition-transform duration-1000',
    },
  },
  {
    value: true,
    label: 'Angular',
    class: 'data-[state=checked]:bg-red-500/30 data-[state=checked]:border-red-500',
    checkbox: 'red',
    una: {
      checkboxCheckedIcon: 'i-logos-angular-icon',
      checkboxIndicator: 'data-[state=checked]:scale-120 transition-transform duration-1000',
    },
  },
  {
    value: true,
    label: 'Svelte',
    class: 'data-[state=checked]:bg-orange-500/30 data-[state=checked]:border-orange-500',
    checkbox: 'orange',
    una: {
      checkboxCheckedIcon: 'i-logos-svelte-icon',
      checkboxIndicator: 'data-[state=checked]:scale-120 transition-transform duration-1000',
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
        v-model:checked="option.value"
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
