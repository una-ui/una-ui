<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
  note: z.string(),
  contributor: z.string(),
  framework: z.object({
    value: z.string().min(1, 'This field is required'),
    label: z.string().min(1, 'This field is required'),
  }),
  theme: z.string(),
  notifications: z.array(z.object({
    label: z.string().min(1, 'This field is required'),
    value: z.boolean(),
    checkbox: z.string(),
  })),
  enabled: z.boolean(),
  slider: z.array(z.number().max(40, { message: 'Must be less than 40' })),
}))

const { handleSubmit, validate, errors } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

async function onValidating() {
  await validate()

  const firstErrorField = Object.keys(errors.value)[0]
  if (firstErrorField) {
    const firstErrorFieldElement = document.querySelector(`[name=${firstErrorField}]`) as HTMLElement
    if (firstErrorFieldElement) {
      firstErrorFieldElement.focus()
      firstErrorFieldElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  onSubmit()
}
</script>

<template>
  <form
    class="mx-auto max-w-sm p-4 space-y-4"
    @submit.prevent="onValidating()"
  >
    <NFormField
      name="username"
      label="Username"
    >
      <NInput placeholder="Username" />
    </NFormField>

    <NFormField
      name="password"
      label="Password"
    >
      <NInput type="password" placeholder="Password" />
    </NFormField>

    <NFormField
      name="note"
      label="Note"
    >
      <NInput type="textarea" placeholder="Additional Note" />
    </NFormField>

    <NFormField
      name="contributor"
      label="Contributor"
      description="Select a contributor from the Vue community"
    >
      <NSelect
        placeholder="Options"
        :items="['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']"
      />
    </NFormField>

    <NFormField
      name="framework"
      label="Framework"
      description="Select a framework without a trigger"
    >
      <NCombobox
        :items="[
          { value: 'next.js', label: 'Next.js' },
          { value: 'sveltekit', label: 'SvelteKit' },
          { value: 'nuxt', label: 'Nuxt' },
          { value: 'remix', label: 'Remix' },
          { value: 'astro', label: 'Astro' },
        ]"
        :_combobox-input="{
          placeholder: 'Select framework...',
          autocomplete: 'off',
        }"
        by="value"
      />
    </NFormField>

    <NFormField
      name="theme"
      label="Theme"
    >
      <NRadioGroup
        :items="[
          { value: 'light', label: 'Light', description: 'For bright environments' },
          { value: 'dark', label: 'Dark', description: 'Easier on the eyes' },
          { value: 'system', label: 'System', description: 'Follows your system preference' },
        ]"
      />
    </NFormField>

    <NFormField
      name="notifications"
      label="Participating, @mentions and custom"
    >
      <NCheckbox
        v-for="option in [
          {
            label: 'On github',
            value: false,
          },
          {
            label: 'Email',
            value: false,
          },
          {
            label: 'Discord',
            value: false,
          },
        ]"
        :key="option.label"
        v-model="option.value"
        :label="option.label"
      />
    </NFormField>

    <NFormField
      name="enabled"
      label="Switch"
    >
      <NSwitch />
    </NFormField>

    <NFormField
      name="slider"
      label="Slider"
    >
      <NSlider
        :min="0"
        :max="100"
      />
    </NFormField>

    <NButton type="submit">
      Submit
    </NButton>
  </form>
</template>
