<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  framework: z.object({
    value: z.string().min(1, 'This field is required'),
    label: z.string().min(1, 'This field is required'),
  }),
}))

useForm({
  validationSchema: formSchema,
  validateOnMount: true,
})

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFramework = ref()
</script>

<template>
  <form class="flex flex-col gap-2">
    <NFormField
      name="framework"
      label="Framework"
      description="Select a framework"
    >
      <NCombobox
        v-model="selectedFramework"
        :items="frameworks"
        :_combobox-input="{
          placeholder: 'Select framework...',
          autocomplete: 'off',
        }"
        by="value"
      />
    </NFormField>
  </form>
</template>
