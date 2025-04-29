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
  <div
    class="flex flex-col gap-2"
  >
    <form class="flex">
      <NFormField
        name="framework"
        label="Framework"
        description="Select a framework without a trigger"
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

    <NSeparator />

    <form class="flex">
      <NFormField
        name="framework"
        label="Framework"
        description="Select a framework with a trigger"
      >
        <NCombobox
          v-model="selectedFramework"
          :items="frameworks"
          :_combobox-input="{
            placeholder: 'Select framework...',
          }"
          by="value"
        >
          <template #trigger>
            {{ selectedFramework?.label ?? 'Select framework...' }}
          </template>
        </NCombobox>
      </NFormField>
    </form>
  </div>
</template>
