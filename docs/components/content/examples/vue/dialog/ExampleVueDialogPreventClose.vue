<script setup lang="ts">
</script>

<template>
  <NDialog
    title="Unclosable Dialog"
    :_dialog-close="{
      btn: 'solid-gray',
    }"
    prevent-close
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Dialog
      </NButton>
    </template>

    <div>
      This dialog will stay open and not close until the close button is pressed.
    </div>
  </NDialog>
</template>
