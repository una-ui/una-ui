<script setup lang="ts">
const page = ref(3)
</script>

<template>
  <NPagination
    v-model:page="page"
    :items-per-page="20"
    :total="100"
    :show-first="false"
    :show-last="false"
    show-edges
  >
    <template #start>
      <NPaginationInfo v-slot="{ first, last, total }">
        {{ first }}–{{ last }} of {{ total }} results
      </NPaginationInfo>
    </template>

    <template #end>
      <NButton
        btn="outline-gray"
        size="sm"
        label="Export"
        leading="i-lucide-download"
      />
    </template>
  </NPagination>
</template>
