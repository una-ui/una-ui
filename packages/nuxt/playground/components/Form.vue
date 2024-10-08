<script setup lang="ts">
const loading = ref(false)
</script>

<template>
  <form
    flex="~ col"
    w-100 gap-4 border rounded-md p-8 @submit.prevent="loading = true"
  >
    <div
      :class="{ 'n-disabled': loading }"
      flex="~ col" gap-4
    >
      <NFormGroup label="Name" status="error" message="Required" required>
        <NInput placeholder="John Doe" />
      </NFormGroup>

      <NFormGroup label="Email">
        <NInput placeholder="johnDoe@email.com" />
      </NFormGroup>

      <NFormGroup label="Password">
        <NInput type="password" />
      </NFormGroup>

      <NFormGroup label="Confirm Password">
        <NInput type="password" />
      </NFormGroup>
    </div>

    <NButton type="submit" mt-4 label="Submit" :loading="loading" />
    <NButton btn="solid-white" label="Cancel" @click="loading = false" />
  </form>
</template>
