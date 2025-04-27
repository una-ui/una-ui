<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  framework: z.string().min(1, 'This field is required'),
  username: z.string().min(1, 'This field is required'),
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
  <form>
    <NFormField
      name="username"
      label="Username"
    >
      <NInput placeholder="username" />
    </NFormField>

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
        class="flex"
        by="value"
      />
    </NFormField>
  </form>
</template>
