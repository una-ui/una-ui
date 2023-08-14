<script setup lang="ts">
const isLoading = ref(false)
const input = ref('')
</script>

<template>
  <div class="mx-auto h-screen flex flex-col items-center justify-center gap-4 container">
    <Form />

    <ColorMode />

    <NThemeSwitcher />
    <!-- <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <NButton
        label="Button"
        btn="outline-indigo"
      />
      <NThemeSwitcher />
    </div> -->
  </div>
</template>
