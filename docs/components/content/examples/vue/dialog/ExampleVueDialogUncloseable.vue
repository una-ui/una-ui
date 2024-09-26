<script setup lang="ts">
</script>

<template>
  <NDialog
    title="Uncloseable Dialog"
    :_dialog-content="{
      trapFocus: true,
    }"
    :_dialogClose="{
      btn: 'solid-white',
    }"
  >
    <template #trigger>
      <NButton>
        Open Dialog
      </NButton>
    </template>

    <div>
      This dialog will stay open and not close until the close button is pressed.
    </div>
  </NDialog>
</template>
