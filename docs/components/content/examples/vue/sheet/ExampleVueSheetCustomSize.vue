<template>
  <div>
    <NSheet
      title="Users"
      description="Manage your users"
      :una="{
        sheetContent: 'max-w-7xl overflow-y-auto',
      }"
    >
      <template #trigger>
        <NButton btn="outline-gray">
          Adjust Sheet Size
        </NButton>
      </template>

      <template #body>
        <div class="overflow-auto py-6">
          <ExampleVueTableSlots />
        </div>
      </template>
    </NSheet>
  </div>
</template>
