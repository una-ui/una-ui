<template>
  <div>
    <NSheet
      title="Users"
      description="Manage your users"
      :una="{
        sheetContent: 'max-w-7xl',
      }"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Adjust Sheet Size
        </NButton>
      </template>

      <div class="overflow-auto py-6">
        <ExampleVueTableSlots />
      </div>
    </NSheet>
  </div>
</template>
