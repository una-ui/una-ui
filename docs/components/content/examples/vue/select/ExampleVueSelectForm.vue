<script setup lang="ts">
import * as z from 'zod'

const formSchema = z.object({
  contributor: z.string().min(1, 'This field is required'),
})

useForm({
  validationSchema: formSchema,
  validateOnMount: true,
})

const selected = ref<string>()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <form>
    <div class="flex items-end">
      <NFormField
        name="contributor"
        label="Contributor"
        description="Select a contributor from the Vue community"
        required
      >
        <NSelect
          v-model="selected"
          placeholder="Options"
          :items="items"
        />
      </NFormField>
    </div>
  </form>
</template>
