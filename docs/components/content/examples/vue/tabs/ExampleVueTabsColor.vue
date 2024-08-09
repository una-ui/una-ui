<script setup lang="ts">
const items = ref([
  {
    value: 'account',
    name: 'Account',
    _tabsTrigger: {
      leading: 'i-heroicons-user-20-solid',
    },
  },
  {
    value: 'service',
    name: 'Service Provider',
    _tabsTrigger: {
      trailing: 'i-heroicons-chevron-right-20-solid',
      tabs: 'solid-primary',
    },
  },
  {
    value: 'reviews',
    name: 'Reviews',
    _tabsTrigger: {
      tabs: 'outline-success',
      loading: true,
    },
  },
])

const ServiceProvider = defineAsyncComponent(() => import('../radio/ExampleVueRadioFormGroup.vue'))
</script>

<template>
  <NTabs
    :items="items"
    tabs="soft-black"
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
