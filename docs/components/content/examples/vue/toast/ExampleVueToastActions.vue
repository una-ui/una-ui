<script setup lang="ts">
const { toast } = useToast()

const actions = ref([
  {
    label: 'Try again',
    click: () => {
      alert('Try again')
    },
  },
])
</script>

<template>
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          actions,
        },
      )"
    />
  </div>
</template>
