<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
}))

const { handleSubmit, validate, errors } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-console
  console.log('Form submitted!', values)
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
    class="mt-5 w-70% space-y-4"
    @submit.prevent="onValidating()"
  >
    <NFormField
      name="username"
      label="Username"
    >
      <NInput placeholder="username" />
    </NFormField>

    <NFormField
      name="password"
      label="Password"
    >
      <NInput type="password" placeholder="password" />
    </NFormField>

    <NButton type="submit">
      Submit
    </NButton>
  </form>
</template>
