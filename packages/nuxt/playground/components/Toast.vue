<script setup lang="ts">
const toast = useToast()

const actions = ref([{
  label: 'Click',
  // click: () => alert('Lets gooo'),
}])
</script>

<template>
  <NButton
    label="Show toast" @click="toast.add(
      {
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        actions,
        toast: 'soft',
        _toastAction: {
          btn: 'solid',
        },
      },
    )"
  />
</template>
