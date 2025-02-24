<script setup lang="ts">
const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const
const username = ref('')
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <NSheet v-for="side in SHEET_SIDES" :key="side">
      <template #trigger>
        <NButton variant="outline">
          Open {{ side }}
        </NButton>
      </template>

      <NSheetContent :side="side">
        <NSheetHeader>
          <NSheetTitle>Edit profile</NSheetTitle>
          <NSheetDescription>
            Make changes to your profile here. Click save when you're done.
          </NSheetDescription>
        </NSheetHeader>

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
        <NSheetFooter>
          <NSheetClose as-child>
            <NButton type="submit">
              Save changes
            </NButton>
          </NSheetClose>
        </NSheetFooter>
      </NSheetContent>
    </NSheet>
  </div>
</template>
