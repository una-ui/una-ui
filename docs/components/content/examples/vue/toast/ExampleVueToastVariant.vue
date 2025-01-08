<script setup lang="ts">
const { toast } = useToast()

const actions = ref([
  {
    label: 'Try again',
    click: () => alert('Try again'),
    altText: 'Try again',
  },
])
</script>

<template>
  <div class="h-28 flex flex-wrap items-center justify-around gap-4">
    <NButton
      label="Base toast"
      btn="solid-white"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'solid-white',
          progress: 'white',
          showProgress: true,
          actions,
          closable: true,
        },
      )"
    />
    <NButton
      label="soft-success toast"
      btn="soft-success"
      @click="toast(
        {
          title: 'Success! Your request was processed.',
          description: 'Your request has been successfully processed.',
          toast: 'soft-success',
          progress: 'success',
          showProgress: true,
          closable: true,
        },
      )"
    />
    <NButton
      label="soft-warning toast"
      btn="soft-warning"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'soft-warning',
          progress: 'warning',
          showProgress: true,
          actions,
          closable: true,
        },
      )"
    />
  </div>
</template>
