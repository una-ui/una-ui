<script setup lang="ts">
const toast = useToast()

const actions = ref([{
  label: 'Click',
  // click: () => alert('Lets gooo'),
  // altText: 'Hello',
}])

/**
 * @name NToast
 *
 * @todo
 * - [x] Add toast functionality
 *     - [x] Add Toasts.vue to app for Button functionality
 *         - [ ] Add list of toasts
 *     - [ ] Add NToast general functionality
 * - [x] Add useToast composable
 * - [x] Add toast presets
 * - [x] Add dynamic colors
 * - [x] Add toast slots
 * - [x] Add toast props
 * - [ ] Add toast documentation
 *     - [ ] Add toast markdown
 *     - [ ] Add toast examples
 */
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
  <!-- <NToast closable>
    <template #title>
      Hello title
    </template>
    <template #description>
      Hello description
    </template>
    <template #actions>
      <NButton
        v-for="a, i in actions"
        :key="i"
        :label="a.label"
        @click="a.click"
      />
    </template>
    <template #closeIcon>
      <NIcon name="i-gravity-ui:hand-ok" />
    </template>
  </NToast> -->
</template>
