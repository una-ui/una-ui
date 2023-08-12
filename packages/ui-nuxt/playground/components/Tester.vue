<script setup lang="ts">
function click(description: string) {
  // eslint-disable-next-line no-alert
  alert(description)
}

const isPasswordVisible = ref(false)
</script>

<template>
  <div flex="~ col" w-80 gap-4>
    <NFormGroup label="Email">
      <NInput
        placeholder="Enter your email"
        type="email"
        input="outline-black"
      />
    </NFormGroup>

    <NFormGroup label="Password">
      <NInput
        type="password"
        input="outline-black"
      />
    </NFormGroup>

    <NButton btn="solid-black block">
      Create account
    </NButton>
  </div>
</template>
