<template>
  <NVInput
    leading="i-heroicons-currency-dollar-20-solid"
    placeholder="Search"
    :nv="{
      inputBase: 'pe-12',
    }"
  >
    <template #trailing>
      <span class="text-xs font-bold">
        USD
      </span>
    </template>
  </NVInput>
</template>
