<script setup lang="ts">
const toast = useToast()

const actions = ref([
  {
    label: 'Try again',
    // eslint-disable-next-line no-alert
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
      @click="toast.add(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'outline-gray',
          toastAction: 'solid-white',
          actions,
          closable: true,
        },
      )"
    />
    <NButton
      label="Outline-yellow toast"
      btn="outline-yellow"
      @click="toast.add(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'outline-yellow',
          toastAction: 'soft-yellow',
          actions,
          closable: true,
        },
      )"
    />
    <NButton
      label="Soft-green toast"
      btn="soft-green"
      @click="toast.add(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'soft-green',
          toastAction: 'outline-green',
          actions,
          closable: true,
        },
      )"
    />
  </div>
</template>
