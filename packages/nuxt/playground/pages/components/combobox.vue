<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  framework: z.object({
    value: z.string().min(1, 'This field is required'),
    label: z.string().min(1, 'This field is required'),
  }),
  username: z.string().min(1, 'This field is required'),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const selectedFramework = ref()

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const onSubmit = handleSubmit((data) => {
  console.log(data)
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-2">
      <NFormField
        name="username"
        label="Username"
      >
        <NInput placeholder="Username" />
      </NFormField>

      <NFormField
        name="framework"
        label="Framework"
        description="Select a framework"
      >
        <NCombobox
          :items="frameworks"
          :_combobox-input="{
            placeholder: 'Select framework...',
            autocomplete: 'off',
          }"
          by="value"
        />
      </NFormField>

      <!-- <NFormField
        name="framework"
        label="Framework"
        description="Select a framework"
      >
        <NCombobox
          :items="frameworks"
          by="value"
        >
          <template #trigger="{ value }">
            {{ value }}
          </template>
        </NCombobox>
      </NFormField> -->

      <NButton type="submit">
        Submit
      </NButton>
    </div>
  </form>

  <NCombobox
    v-model="selectedFramework"
    :items="frameworks"
    by="value"
  >
    <template #trigger="{ value }">
      {{ value }}
    <!-- <template v-if="value">
      <div class="flex flex-col items-start gap-0.5">
        <span class="text-muted-foreground text-xs font-normal">
          {{ value?.label }}
        </span>
        <span>{{ value.label }}</span>
      </div>
    </template>
    <template v-else>
      Select framework
    </template> -->
    </template>
  </NCombobox>
</template>
