<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <div>
    <NButton label="Open Dialog" @click="open = true" />
  </div>
  <NDialog
    title="Uncloseable Dialog"
    :open
    :una="{ dialogClose: '!hidden' }"
  >
    <div>
      This dialog will stay open and not close until the close button is pressed.
    </div>
    <template #footer>
      <NButton label="Close" @click="open = false" />
    </template>
  </NDialog>
</template>
