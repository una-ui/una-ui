<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <div class="grid h-28 place-items-center">
    <div class="flex flex-wrap justify-center gap-2">
      <NButton
        btn="solid-white"
        label="With progress"
        @click="toast.warning('Your trial ends in 3 days', {
          showProgress: true,
          progress: 'warning',
          duration: 6000,
        })"
      />

      <NButton
        btn="outline-gray"
        label="Progress + actions"
        @click="toast.info('A new version is available', {
          description: 'Reload to update.',
          showProgress: true,
          duration: 8000,
          actions: [{ label: 'Reload' }, { label: 'Later', btn: 'ghost-gray' }],
        })"
      />
    </div>
  </div>
</template>
