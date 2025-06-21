<script setup lang="ts">
const username = ref('')
</script>

<template>
  <NSheet
    title="Sheet Title"
    description="This is a basic example of the sheet component."
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Sheet
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
</template>
