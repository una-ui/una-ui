<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <div class="grid h-28 place-items-center">
    <div class="flex flex-wrap justify-center gap-2">
      <NButton btn="outline-gray" label="Success" @click="toast.success('Changes saved')" />
      <NButton btn="outline-gray" label="Error" @click="toast.error('Uh oh! Something went wrong.')" />
      <NButton btn="outline-gray" label="Warning" @click="toast.warning('Your trial ends in 3 days')" />
      <NButton btn="outline-gray" label="Info" @click="toast.info('A new version is available')" />
      <NButton btn="outline-gray" label="Loading" @click="toast.loading('Uploading file…')" />
    </div>
  </div>
</template>
