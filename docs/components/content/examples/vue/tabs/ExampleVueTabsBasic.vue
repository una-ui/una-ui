<script setup lang="ts">
import ExampleVueRadioFormGroup from '../radio/ExampleVueRadioFormGroup.vue'

const items = ref([
  {
    value: 'account',
    name: 'Account',
  },
  {
    value: 'service',
    name: 'Service Provider',
  },
  {
    value: 'reviews',
    name: 'Reviews',
  },
])
</script>

<template>
  <NTabs
    :items="items"
  >
    <template #content="{ item }">
      <div v-if="item.value === 'account'" flex="~ col items-start">
        <NFormGroup
          label="Email"
          required
          description="We'll never share your email with anyone else."
        >
          <NInput
            placeholder="phojrengel@gmail.com"
            leading="i-heroicons-envelope-20-solid"
          />
        </NFormGroup>
        <NButton mt-3 self-start px-4>
          Confirm
        </NButton>
      </div>
      <div v-if="item.value === 'service'">
        <ExampleVueRadioFormGroup />
      </div>
      <div v-if="item.value === 'reviews'">
        <NFormGroup label="Write your review">
          <NInput
            type="textarea"
            placeholder="Write your review here..."
            resize="x"
          />
        </NFormGroup>
        <NButton mt-2 self-start px-4>
          Save changes
        </NButton>
      </div>
    </template>
  </NTabs>
</template>
