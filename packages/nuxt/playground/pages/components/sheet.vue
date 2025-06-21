<script setup lang="ts">
const SHEET_SIDES = [{
  sheet: 'top',
  label: 'Top',
  closeIcon: 'i-lucide-square-chevron-down', // default
  una: {},
}, {
  sheet: 'right',
  label: 'Right',
  closeIcon: 'i-close',
  una: {},
}, {
  sheet: 'bottom',
  label: 'Bottom',
  closeIcon: 'i-lucide-chevron-down',
  una: {
    sheetContent: 'h-full',
  },
}, {
  sheet: 'left',
  label: 'Left',
  closeIcon: 'i-lucide-chevrons-left',
  una: {
    sheetContent: 'max-w-xl',
  },
}] as const

const username = ref('')
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <!-- Side variants -->
    <NSheet
      v-for="side in SHEET_SIDES"
      :key="side.sheet"
      :sheet="side.sheet"
      title="Edit profile"
      description="Make changes to your profile here. Click save when you're done."
      :_sheet-close="{
        label: side.closeIcon,
      }"
      :una="side.una"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Open {{ side.label }}
        </NButton>
      </template>

      <template #body>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <NLabel for="name" class="text-right">
              Name
            </NLabel>
            <NInput id="name" v-model="username" :una="{ inputWrapper: 'col-span-3' }" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <NLabel for="username" class="text-right">
              Username
            </NLabel>
            <NInput id="username" v-model="username" :una="{ inputWrapper: 'col-span-3' }" />
          </div>
        </div>
      </template>

      <template #footer>
        <NSheetClose>
          <NButton type="submit" label="Save changes" />
        </NSheetClose>
      </template>
    </NSheet>

    <!-- Prevent close -->
    <NSheet
      sheet="right"
      prevent-close
      title="Prevent close"
      description="This sheet cannot be closed by clicking outside of it"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Prevent close
        </NButton>
      </template>
    </NSheet>

    <!-- Disable overlay  -->
    <NSheet
      :overlay="false"
      title="Disable overlay"
      description="This sheet has no overlay"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Disable overlay
        </NButton>
      </template>
    </NSheet>

    <!-- No title and description  -->
    <NSheet>
      <template #trigger>
        <NButton btn="outline-gray">
          No title and description
        </NButton>
      </template>
    </NSheet>

    <!-- No close button  -->
    <NSheet
      :show-close="false"
      title="No close button"
      description="This sheet has no close button"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          No close button
        </NButton>
      </template>
    </NSheet>
  </div>
</template>
