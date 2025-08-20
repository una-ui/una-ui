<script setup lang="ts">
const value = ref(1)
</script>

<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">Dynamic colors:</span>

    <div class="grid gap-4 sm:cols-2">
      <NNumberField
        v-model="value"
        number-field="outline-primary"
      />

      <NNumberField
        v-model="value"
        number-field="outline-indigo"
      />

      <NNumberField
        v-model="value"
        number-field="solid-rose"
      />

      <NNumberField
        v-model="value"
        number-field="solid-lime"
      />
    </div>

    <span class="text-sm font-medium">Static colors:</span>

    <div class="grid gap-4 sm:cols-2">
      <div class="flex flex-col gap-4">
        <NNumberField
          v-model="value"
          number-field="outline-gray"
        />
        <NNumberField
          v-model="value"
          number-field="outline-black"
        />
      </div>
    </div>
  </div>
</template>
