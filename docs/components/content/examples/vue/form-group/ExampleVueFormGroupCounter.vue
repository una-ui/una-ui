<script setup lang="ts">
const username = ref('')
</script>

<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NFormGroup
      label="Username"
      :counter="{
        value: username.length,
      }"
      message="Username has no length limit"
    >
      <!-- TODO: update to NTextArea later -->
      <NInput
        v-model="username"
        leading="i-heroicons-user-20-solid"
      />
    </NFormGroup>

    <NFormGroup
      label="Username"
      :counter="{
        value: username.length,
        max: 10,
      }"
      :status="username.length > 10 ? 'error' : undefined"
      :message="username.length > 10 ? 'Username must be less than 10 characters' : undefined"
    >
      <!-- TODO: update to NTextArea later -->
      <NInput
        v-model="username"
        leading="i-heroicons-user-20-solid"
      />
    </NFormGroup>
  </div>
</template>
