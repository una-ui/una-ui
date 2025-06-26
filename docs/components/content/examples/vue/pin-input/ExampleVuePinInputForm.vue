<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  pin: z.array(z.string()).min(6, 'This field is required'),
}))

useForm({
  validationSchema: formSchema,
  validateOnMount: true,
})

const value = ref<string[]>([])
</script>

<template>
  <form>
    <NFormField
      name="pin"
      label="Pin"
      description="Enter your pin"
      required
    >
      <NPinInput
        v-model="value"
        :max-length="6"
        :group-by="2"
        separator="i-lucide-dot"
      />
    </NFormField>
  </form>
</template>
