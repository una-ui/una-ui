<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const source = ref('https://unaui.com/getting-started/installation')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <NDialog
    title="Share Link"
    description="Anyone with this link will be able to view this project."
    :_dialog-footer="{
      class: 'sm:justify-start',
    }"
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Open Dialog
      </NButton>
    </template>

    <form
      class="flex gap-2"
      @submit.prevent="copy(source)"
    >
      <NInput
        v-model="source"
        leading="i-radix-icons-link-2"
        :una="{
          inputWrapper: 'w-full',
        }"
        read-only
      />

      <NButton
        icon
        square
        type="submit"
        :btn="copied ? 'outline' : 'solid'"
        :label="!copied ? 'i-radix-icons-copy' : 'i-radix-icons-check'"
      />
    </form>

    <template #footer>
      <NDialogClose>
        <NButton
          btn="soft-gray"
        >
          Close
        </NButton>
      </NDialogClose>
    </template>
  </NDialog>
</template>
