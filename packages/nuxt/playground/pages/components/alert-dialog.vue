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
  <div v-if="false" class="grid grid-cols-2 gap-2">
    <!-- Default -->
    <NAlertDialog
      title="Default Alert Dialog"
      description="This is a default alert dialog."
    >
      <template #trigger>
        <NButton btn="outline">
          Default
        </NButton>
      </template>
    </NAlertDialog>

    <!-- Custom Animation -->
    <NAlertDialog
      title="Custom Animation Alert Dialog"
      description="This alert dialog has a custom animation."
      :una="{
        alertDialogOverlay: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
        alertDialogContent: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
      }"
    >
      <template #trigger>
        <NButton btn="outline">
          Custom Animation
        </NButton>
      </template>
    </NAlertDialog>

    <!-- Custom Size -->
    <NAlertDialog
      title="Custom Size Alert Dialog"
      description="This alert dialog has a custom size."
      :una="{
        alertDialogContent: 'max-w-7xl',
      }"
    >
      <template #trigger>
        <NButton btn="outline">
          Custom Size
        </NButton>
      </template>
    </NAlertDialog>

    <!-- Prevent Close -->
    <NAlertDialog
      title="Prevent Close Alert Dialog"
      description="This is alert dialog prevents closing using escape key."
      prevent-close
    >
      <template #trigger>
        <NButton btn="outline">
          Prevent Close
        </NButton>
      </template>
    </NAlertDialog>
  </div>

  <!-- Basic -->
  <NAlertDialog
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete youraccount and remove your data from our servers."
    @action="() => {
      console.log('action')
    }"
    @cancel="() => {
      console.log('cancel')
    }"
  >
    <template #trigger>
      <NButton btn="solid-gray">
        Show Dialog
      </NButton>
    </template>
  </NAlertDialog>

  <!-- ExampleVueAlertDialogSlotDefault.vue Custom Rendering (shadcn/ui) -->
  <NAlertDialog v-if="false">
    <NAlertDialogTrigger as-child>
      <NButton btn="solid-gray">
        Show Dialog
      </NButton>
    </NAlertDialogTrigger>
    <NAlertDialogContent>
      <NAlertDialogHeader>
        <NAlertDialogTitle>Are you absolutely sure?</NAlertDialogTitle>
        <NAlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </NAlertDialogDescription>
      </NAlertDialogHeader>
      <NAlertDialogFooter>
        <NAlertDialogCancel>
          Cancel
        </NAlertDialogCancel>
        <NAlertDialogAction>Continue</NAlertDialogAction>
      </NAlertDialogFooter>
    </NAlertDialogContent>
  </NAlertDialog>
</template>
