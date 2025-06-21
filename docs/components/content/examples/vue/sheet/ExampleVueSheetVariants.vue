<script setup lang="ts">
const SHEET_SIDES = [
  {
    sheet: 'top',
    label: 'Top',
  },
  {
    sheet: 'right',
    label: 'Right',
  },
  {
    sheet: 'bottom',
    label: 'Bottom',
  },
  {
    sheet: 'left',
    label: 'Left',
  },
] as const
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
  </div>
</template>
