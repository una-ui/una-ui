<script setup lang="ts">
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  payment: z.number().min(10, 'Min 10 euros to send payment').max(5000, 'Max 5000 euros to send payment'),
}))

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    payment: 10,
  },
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: JSON.stringify(values, null, 2),
  })
})
</script>

<template>
  <!-- You don't need this if you're using the `NToaster` component in the root layout like `app.vue` -->
  <NToaster />

  <form class="w-2/3 space-y-6" @submit="onSubmit">
    <NFormField
      name="payment"
      label="Payment"
      message="Enter value between 10 and 5000."
    >
      <NNumberField
        class="gap-2"
        :min="0"
        :format-options="{
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'code',
          currencySign: 'accounting',
        }"
        @update:model-value="(v) => {
          if (v) {
            setFieldValue('payment', v)
          }
          else {
            setFieldValue('payment', undefined)
          }
        }"
      />
    </NFormField>

    <NButton type="submit">
      Submit
    </NButton>
  </form>
</template>
