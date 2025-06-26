<script setup lang="ts">
const value = ref(['1', '2', '3', '4', '5', '6'])
</script>

<template>
  <div class="flex flex-col flex-wrap gap-6 md:flex-row">
    <div class="grid gap-2">
      <NLabel for="simple">
        Simple
      </NLabel>
      <NPinInput
        id="simple"
        :max-length="6"
        :group-by="3"
        separator
      />
    </div>

    <div class="grid gap-2">
      <NLabel for="digits-only">
        Digits Only
      </NLabel>
      <NPinInput
        id="digits-only"
        :max-length="6"
        type="number"
      />
    </div>

    <div class="grid gap-2">
      <NLabel for="with-separator">
        With Separator
      </NLabel>
      <NPinInput
        id="with-separator"
        v-model="value"
        :max-length="6"
        :group-by="3"
        separator
      />
    </div>

    <div class="grid gap-2">
      <NLabel for="with-spacing">
        With Spacing
      </NLabel>
      <NPinInput
        id="with-spacing"
        v-model="value"
        :group-by="1"
        :max-length="6"
      />
    </div>
  </div>
</template>
