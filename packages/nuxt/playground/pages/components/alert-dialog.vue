<script setup lang="ts">
// const props = defineProps<{
//   modelValue?: boolean
// }>()

/*
  TODO:
  - Add props
    - [x] Prevent Close
    - [x] Title + Visually Hidden support
    - [x] Description + Visually Hidden support
    - [x] Action
    - [x] Cancel
  - Add Slots
    - [x] Default
    - [x] Trigger
    - [x] Trigger Root
    - [x] Header
    - [x] Title
    - [x] Description
    - [x] Content
    - [x] Footer
    - [x] Cancel
    - [x] Action
  - Add examples
    - [x] Basic
    - [x] Prevent Close
    - [x] Custom Rendering #default (shadcn/ui)
    - [x] Custom Animation
    - [x] Custom #Trigger
    - [x] Custom #Content
    - [x] Custom #Footer
*/
</script>

<template>
  <NAlertDialog
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete youraccount and remove your data from our servers."
    @action="($event) => {
      console.log('action', $event)
    }"
    @cancel="($event) => {
      console.log('cancel', $event)
    }"
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Show Dialog
      </NButton>
    </template>
  </NAlertDialog>
</template>
