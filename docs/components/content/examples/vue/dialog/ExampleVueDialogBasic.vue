<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const source = ref('https://unaui.com/getting-started/installation')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <NDialog
    title="Share Link"
    description="Anyone with this link will be able to view this project."
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Open Dialog
      </NButton>
    </template>

    <div class="w-full flex flex-col space-y-2">
      <form
        class="flex gap-2"
        @submit.prevent="copy(source)"
      >
        <NInput
          v-model="source"
          leading="i-radix-icons-link-2"
          read-only
        />

        <NButton
          icon
          square
          type="submit"
          :label="!copied ? 'i-radix-icons-copy' : 'i-radix-icons-check'"
        />
      </form>
    </div>
  </NDialog>
</template>
