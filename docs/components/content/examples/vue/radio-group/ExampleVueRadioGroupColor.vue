<script setup lang="ts">
</script>

<template>
  <NRadioGroup
    default-value="comfortable"
    orientation="horizontal"
  >
    <div class="flex items-center space-x-2">
      <NRadioGroupItem id="r1" value="default" />
      <NLabel for="r1">
        Default
      </NLabel>
    </div>
    <div class="flex items-center space-x-2">
      <NRadioGroupItem id="r2" value="comfortable" />
      <NLabel for="r2">
        Comfortable
      </NLabel>
    </div>
    <div class="flex items-center space-x-2">
      <NRadioGroupItem id="r3" value="compact" />
      <NLabel for="r3">
        Compact
      </NLabel>
    </div>
  </NRadioGroup>
</template>
