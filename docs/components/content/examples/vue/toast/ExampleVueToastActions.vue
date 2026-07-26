<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <div class="grid h-28 place-items-center">
    <div class="flex flex-wrap justify-center gap-2">
      <NButton
        btn="solid-white"
        label="Action"
        @click="toast('Event deleted', {
          action: { label: 'Undo', onClick: () => toast.success('Event restored') },
        })"
      />

      <NButton
        btn="outline-gray"
        label="Cancel"
        @click="toast('Discard draft?', {
          cancel: { label: 'Keep', onClick: () => {} },
        })"
      />

      <NButton
        btn="outline-gray"
        label="Multiple actions"
        @click="toast.error('Uh oh! Something went wrong.', {
          description: 'There was a problem with your request.',
          actions: [
            { label: 'Try again', onClick: () => toast.success('Retrying…') },
            { label: 'Details', btn: 'ghost-gray' },
          ],
        })"
      />
    </div>
  </div>
</template>
