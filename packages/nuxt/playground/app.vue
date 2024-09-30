<script setup>
const value = ref('cat')
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center gap-12 !bg-base">
    <NThemeSwitcher />

    <Dialog />

    <div>
      <NSelect v-model="value" :items="['cat', 'dog', 'cow', 'bat']" />
    </div>

    <ColorMode />
  </div>
</template>
