<script setup lang="ts">
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)
</script>

<template>
  <div class="grid w-full place-items-center">
    <NScrollArea class="h-72 w-80 border rounded-md">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">
          Tags
        </h4>
        <div v-for="el in tags" :key="el">
          <div class="text-sm">
            {{ el }}
          </div>
          <NSeparator v-if="el !== tags[tags.length - 1]" class="my-2" />
        </div>
      </div>
    </NScrollArea>
  </div>
</template>
