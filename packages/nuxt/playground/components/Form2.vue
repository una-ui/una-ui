<script setup lang="ts">
import { z } from 'zod'

const isLoading = ref(false)

const schema = z.object({
  username: z.string().nonempty({ message: 'Username is required' }),
  firstname: z.string().nonempty({ message: 'First name is required' }),
  password: z.string().nonempty({ message: 'Password is required' }).min(8, { message: 'Password must be at least 8 characters' }),
}).required()

type Fields = z.infer<typeof schema>

const fields = ref<Fields>({
  username: '',
  firstname: '',
  password: '',
})

const errors = ref()

function submitForm() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

function validateForm(isFocused = true) {
  try {
    errors.value = {}
    schema.parse(fields.value)

    // if no errors, submit form
    if (typeof errors.value === 'object' && Object.keys(errors.value).length === 0)
      submitForm()
  }
  catch (err) {
    if (err instanceof z.ZodError)
      errors.value = { ...errors.value, ...err.flatten().fieldErrors }

    if (!isFocused)
      return

    // focus on the first error, get the key of the first error
    const firstError = Object.keys(errors.value)[0] as keyof Fields
    if (!firstError)
      return

    const refId = document.getElementById(firstError)
    refId?.focus()
  }
}

function validateField(field: { id: keyof Fields; value: string }) {
  try {
    errors.value = errors.value && Object.fromEntries(
      Object.entries(errors.value).filter(([key]) => key !== field.id),
    )
    schema.pick({ [field.id]: true }).parse({ [field.id]: field.value })
  }
  catch (err) {
    if (err instanceof z.ZodError)
      errors.value = { ...errors.value, ...err.flatten().fieldErrors }
  }
}
</script>

<template>
  <div grid mx-auto place-items-center container>
    <div border="~ base" w-md rounded-lg bg-muted p-10 space-y-9>
      <span flex justify-center>
        <NIcon size="24" name="i-logos-airflow-icon" :class="{ 'animate-spin': isLoading }" />
      </span>

      <form flex="~ col" space-y-5 @submit.prevent="validateForm()">
        <NFormGroup id="username" label="Username" :status="errors?.username ? 'error' : undefined" :message="errors?.username?.[0]">
          <NInput
            v-model="fields.username"
            :disabled="isLoading"
            @blur="validateField({
              id: 'username',
              value: fields.username,
            })"
          />
        </NFormGroup>

        <NFormGroup id="firstname" label="Firstname" :status="errors?.firstname ? 'error' : undefined" :message="errors?.firstname?.[0]">
          <NInput
            v-model="fields.firstname"
            :disabled="isLoading"
            @blur="validateField({
              id: 'firstname',
              value: fields.firstname,
            })"
          />
        </NFormGroup>

        <NFormGroup label="Password" :status="errors?.password ? 'error' : undefined" :message="errors?.password?.[0]">
          <NInput
            v-model="fields.password"
            type="password"
            :disabled="isLoading"
            @blur="validateField({
              id: 'password',
              value: fields.password,
            })"
          />
        </NFormGroup>

        <NButton
          :loading="isLoading"
          :disable="isLoading"

          label="Login"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>
