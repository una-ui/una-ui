<script setup lang="ts">
const gender = ref('digital ocean')

const options = [
  {
    label: 'Digital Ocean',
    value: 'digital ocean',
    radio: 'blue',
  },
  {
    label: 'AWS',
    value: 'aws',
    radio: 'amber',
  },
  {
    label: 'Google Cloud',
    value: 'google cloud',
    radio: 'red',
  },
  {
    label: 'Heroku',
    value: 'heroku',
    radio: 'purple',
  },
]
</script>

<template>
  <div class="flex flex-col space-y-6">
    <!-- Vertical -->
    <NFormGroup
      :for="false"
      label="Service Provider"
      description="Please select your service provider"
    >
      <NRadio v-for="option in options" :key="option.value" v-model="gender" v-bind="option" />
    </NFormGroup>

    <NSeparator />

    <!-- Horizontal -->
    <NFormGroup
      :for="false"
      label="Service Provider"
      description="Please select your service provider"
      required
      status="error"
      message="Service provider is required"
    >
      <div class="flex flex-wrap gap-8">
        <NRadio v-for="option in options" :key="option.value" v-model="gender" v-bind="option" />
      </div>
    </NFormGroup>
  </div>
</template>
