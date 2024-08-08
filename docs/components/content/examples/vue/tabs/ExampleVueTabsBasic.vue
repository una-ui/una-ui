<script setup lang="ts">
const items = ref([
  {
    value: 'account',
    name: 'Account',
    disabled: false,
  },
  {
    value: 'service',
    name: 'Service Provider',
    disabled: false,
  },
  {
    value: 'reviews',
    name: 'Reviews',
    disabled: false,
  },
])

const ServiceProvider = defineAsyncComponent(() => import('../radio/ExampleVueRadioFormGroup.vue'))
</script>

<template>
  <NTabs :items="items" default-value="account">
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
        <ServiceProvider />
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
