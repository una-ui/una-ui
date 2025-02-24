<script setup lang="ts">
const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const
const username = ref('')
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <NSheet
      v-for="side in SHEET_SIDES" :key="side" :side
      title="Edit profile"
      description="Make changes to your profile here. Click save when you're done."
      :_sheetClose="{
        label: 'i-check',
      }"
    >
      <template #trigger>
        <NButton btn="outline">
          Open {{ side }}
        </NButton>
      </template>

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

      <template #footer>
        <NSheetClose>
          <NButton type="submit" label="Save changes" />
        </NSheetClose>
      </template>
    </NSheet>
  </div>
</template>
