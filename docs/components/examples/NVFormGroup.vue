<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col">
    <NVFormGroup
      label="Email"
      description="This is a description"
      hint="Optional"
      message="This is a message"
    >
      <NVInput
        type="email"
        placeholder="Enter your email address"
      />
    </NVFormGroup>

    <NVFormGroup
      label="Email"
      hint="Optional"
      status="warning"
      message="This is a warning message"
    >
      <NVInput
        input="solid-indigo"
        type="email"
        status="warning"
        placeholder="Enter your email address"
      />
    </NVFormGroup>
  </div>
</template>
