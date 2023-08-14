<script setup lang="ts">
const loading = ref(false)
</script>

<template>
  <form flex="~ col" w-90 gap-4 @submit.prevent="loading = true">
    <NFormGroup label="Name">
      <NInput placeholder="John Doe" />
    </NFormGroup>

    <NFormGroup label="Email">
      <NInput placeholder="johndoe@email.com" />
    </NFormGroup>

    <NFormGroup label="Password">
      <NInput type="password" />
    </NFormGroup>

    <NFormGroup label="Confirm Password">
      <NInput type="password" />
    </NFormGroup>

    <NButton type="submit" label="Submit" :loading="loading" />

    <NButton btn="solid-gray" label="Cancel" @click="loading = false" />
  </form>
</template>
