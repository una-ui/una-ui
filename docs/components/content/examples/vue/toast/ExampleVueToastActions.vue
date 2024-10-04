<script setup lang="ts">
const toast = useToast()

const actions = ref([
  {
    label: 'Try again',
    click: () => {
      // eslint-disable-next-line no-alert
      alert('Try again')
    },
    altText: 'Try again',
  },
])
</script>

<template>
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast.add(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          actions,
        },
      )"
    />
  </div>
</template>
