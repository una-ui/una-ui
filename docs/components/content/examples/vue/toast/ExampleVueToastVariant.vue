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
          toast: 'outline-gray',
          actions,
          closable: true,
        },
      )"
    />
    <NButton
      label="Outline-yellow toast"
      btn="outline-yellow"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          toast: 'outline-yellow',
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
          actions,
          closable: true,
        },
      )"
    />
  </div>
</template>
