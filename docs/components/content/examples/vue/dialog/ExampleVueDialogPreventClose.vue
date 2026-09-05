<script setup lang="ts">
</script>

<template>
  <NDialog
    title="Unclosable Dialog"
    :_dialog-close="{
      btn: 'outline-gray',
    }"
    dismissible
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Dialog
      </NButton>
    </template>

    <template #body>
      <div>
        This dialog will stay open and not close until the close button is pressed.
      </div>
    </template>
  </NDialog>
</template>
