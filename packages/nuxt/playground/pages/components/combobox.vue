<script setup lang="ts">
// import { z } from 'zod'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFrameworks = ref<typeof frameworks>([])

// const formSchema = toTypedSchema(z.object({
//   frameworks: z.array(z.object({
//     value: z.string(),
//     label: z.string(),
//   })),
// }))

// const { handleSubmit } = useForm({
//   validationSchema: formSchema,
//   initialValues: {
//     frameworks: [],
//   },
// })

const selectedFramework = ref<typeof frameworks[number]>()
</script>

<template>
  <!-- <form @submit.prevent="handleSubmit">
    <NFormField label="Frameworks" name="frameworks"> -->
  <!-- class="w-[300px]" align="start" -->
  <NCombobox
    v-model="selectedFrameworks"
    :items="frameworks"
    by="label"
    multiple
    :_combobox-input="{
      placeholder: 'Select frameworks (multi-select)...',
    }"
  >
    <template #trigger>
      <NButton btn="solid-white" class="w-full justify-between">
        {{ selectedFrameworks?.length > 0
          ? selectedFrameworks.map((framework) => framework.label).join(", ")
          : "Select frameworks (multi-select)..." }}
        <NIcon name="i-lucide-chevron-down" class="ml-2 shrink-0 opacity-50 size-4" />
      </NButton>
    </template>
  </NCombobox>

  <NCombobox
    v-model="selectedFramework"
    :items="frameworks"
    by="label"
  />
  <!-- </NFormField> -->

  <NButton type="submit" btn="solid-white" class="mt-4">
    Submit
  </NButton>
  <!-- </form> -->
</template>
