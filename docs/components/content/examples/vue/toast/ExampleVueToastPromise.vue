<script setup lang="ts">
const { toast } = useToast()

function save() {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

function upload() {
  const id = toast.loading('Uploading file…')
  setTimeout(() => toast.success('File uploaded', { id }), 2000)
}
</script>

<template>
  <div class="grid h-28 place-items-center">
    <div class="flex flex-wrap justify-center gap-2">
      <NButton
        btn="solid-white"
        label="Promise"
        @click="toast.promise(save(), {
          loading: 'Saving…',
          success: () => 'Changes saved',
          error: () => 'Failed to save',
        })"
      />

      <NButton btn="outline-gray" label="Update by id" @click="upload()" />
    </div>
  </div>
</template>
