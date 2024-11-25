<script setup lang="ts">
const username = ref('')
</script>

<template>
  <div class="grid cols-1 gap-4 sm:cols-2">
    <NFormGroup
      label="Username"
      :counter="{
        value: username.length,
      }"
      message="Username has no length limit"
    >
      <NInput
        v-model="username"
        type="textarea"
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
      <NInput
        v-model="username"
        type="textarea"
        leading="i-heroicons-user-20-solid"
      />
    </NFormGroup>
  </div>
</template>
