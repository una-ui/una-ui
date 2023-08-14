<script setup lang="ts">
const loading = ref(false)
</script>

<template>
  <form flex="~ col" border="~ base" w-100 gap-4 rounded-md p-8 @submit.prevent="loading = true">
    <NFormGroup label="Name" status="error" message="Required" required>
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

    <NButton type="submit" mt-4 label="Submit" :loading="loading" />
    <NButton btn="solid-white" label="Cancel" @click="loading = false" />
  </form>
</template>
