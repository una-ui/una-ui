<script setup lang="ts">
const open = ref(false)

const confirmState = ref<'pending' | 'confirmed' | 'canceled'>('pending')

function onConfirm() {
  confirmState.value = 'confirmed'
  open.value = false
}

function onCancel() {
  confirmState.value = 'canceled'
  open.value = false
}
</script>

<template>
  <div class="pb-2">
    Confirmation state: {{ confirmState }}
    <span v-if="confirmState !== 'pending'">
      <NButton btn="link" class="h-4" label="Reset state" @click="confirmState = 'pending'" />
    </span>
  </div>
  <NDialog v-model:open="open">
    <template #trigger>
      <NButton btn="solid-green" label="Confirmation Dialog" leading="i-mdi:check" />
    </template>

    <template #body>
      <div>
        Please confirm that you want to proceed with this action.
      </div>
    </template>

    <template #footer>
      <NButton
        btn="solid-green"
        label="Confirm"
        leading="i-mdi:check"
        @click="onConfirm"
      />
      <NButton
        btn="solid-red"
        label="Cancel"
        leading="i-mdi:close"
        @click="onCancel"
      />
    </template>
  </NDialog>
</template>
