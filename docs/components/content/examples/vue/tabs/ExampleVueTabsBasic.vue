<script setup lang="ts">
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
    default-value="account"
    :_tabs-content="{
      class: 'py-4',
    }"
  >
    <template #content="{ item }">
      <div v-if="item.value === 'account'" class="flex flex-col items-start">
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
        <NButton class="mt-3 self-start px-4">
          Confirm
        </NButton>
      </div>
      <div v-if="item.value === 'service'">
        <ExampleVueRadioGroupIcon />
      </div>
      <div v-if="item.value === 'reviews'">
        <NFormGroup label="Write your review">
          <NInput
            type="textarea"
            placeholder="Write your review here..."
            resize="x"
          />
        </NFormGroup>
        <NButton class="mt-2 self-start px-4">
          Save changes
        </NButton>
      </div>
    </template>
  </NTabs>
</template>
