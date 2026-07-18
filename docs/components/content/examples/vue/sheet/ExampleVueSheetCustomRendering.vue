<script setup lang="ts">
const SHEET_SIDES = [
  { sheet: 'top' },
  { sheet: 'right' },
  { sheet: 'bottom' },
  { sheet: 'left' },
] as const
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row">
    <NSheet>
      <NSheetTrigger as-child>
        <NButton btn="outline-gray">
          Open
        </NButton>
      </NSheetTrigger>
      <NSheetContent>
        <NSheetHeader>
          <NSheetTitle>Edit profile</NSheetTitle>
          <NSheetDescription>
            Make changes to your profile here. Click save when you're
            done.
          </NSheetDescription>
        </NSheetHeader>
        <div class="grid auto-rows-min flex-1 gap-6 px-4">
          <div class="grid gap-3">
            <NLabel for="sheet-demo-name">
              Name
            </NLabel>
            <NInput id="sheet-demo-name" default-value="Pedro Duarte" />
          </div>
          <div class="grid gap-3">
            <NLabel for="sheet-demo-username">
              Username
            </NLabel>
            <NInput id="sheet-demo-username" default-value="@peduarte" />
          </div>
        </div>
        <NSheetFooter>
          <NButton type="submit">
            Save changes
          </NButton>
          <NSheetClose as-child>
            <NButton btn="outline-gray">
              Close
            </NButton>
          </NSheetClose>
        </NSheetFooter>
      </NSheetContent>
    </NSheet>

    <div class="flex gap-2">
      <NSheet v-for="{ sheet } in SHEET_SIDES" :key="sheet">
        <NSheetTrigger as-child>
          <NButton btn="outline-gray" class="capitalize">
            {{ sheet }}
          </NButton>
        </NSheetTrigger>
        <NSheetContent :sheet="sheet">
          <NSheetHeader>
            <NSheetTitle>Edit profile</NSheetTitle>
            <NSheetDescription>
              Make changes to your profile here. Click save when you're
              done.
            </NSheetDescription>
          </NSheetHeader>
          <div class="overflow-y-auto px-4 text-sm">
            <h4 class="mb-4 text-lg font-medium leading-none">
              Lorem Ipsum
            </h4>
            <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <NSheetFooter>
            <NButton type="submit">
              Save changes
            </NButton>
            <NSheetClose as-child>
              <NButton btn="outline-gray">
                Cancel
              </NButton>
            </NSheetClose>
          </NSheetFooter>
        </NSheetContent>
      </NSheet>
    </div>
  </div>
</template>
