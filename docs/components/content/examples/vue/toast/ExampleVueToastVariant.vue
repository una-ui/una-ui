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
      label="Outline-orange toast"
      btn="outline-orange"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'outline-orange',
          progress: 'progress',
          showProgress: true,
          actions,
          closable: true,
        },
      )"
    />
    <NButton
      label="Soft-info toast"
      btn="soft-info"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'soft-info',
          progress: 'info',
          showProgress: true,
          actions,
          closable: true,
        },
      )"
    />
  </div>
</template>
