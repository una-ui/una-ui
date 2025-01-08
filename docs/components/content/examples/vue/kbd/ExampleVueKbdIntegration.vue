<template>
  <div class="flex flex-wrap gap-4">
    <NButton
      label="Search"
      btn="soft-gray"
      leading="i-heroicons-magnifying-glass"
    >
      <template #trailing>
        <span class="ml-3 inline-flex items-center space-x-0.5" size="md">
          <NKbd label="Cmd" />
          <NKbd label="K" />
        </span>
      </template>
    </NButton>

    <NButton
      label="Search"
      btn="soft"
      leading="i-heroicons-magnifying-glass"
    >
      <template #trailing>
        <span class="ml-3 inline-flex items-center space-x-0.5" size="md">
          <NKbd kbd="solid-primary" label="Cmd" />
          <NKbd kbd="solid-primary" label="K" />
        </span>
      </template>
    </NButton>

    <NInput placeholder="Search" class="pr-13">
      <template #trailing>
        <NKbd label="⌘ K" kbd="outline" />
      </template>
    </NInput>
  </div>
</template>
