<script setup lang="ts">
const value = ref(1)
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <NNumberField v-model="value" />

    <NNumberField :default-value="2" :min="0" :max="3" />

    <NNumberField :default-value="3" :step="3" />

    <NNumberField :default-value="5" :step="2" :step-snapping="false" />

    <NNumberField :default-value="8" disabled />

    <NNumberField :default-value="13" required />

    <NNumberField
      :default-value="21" :format-options="{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
      }"
    />

    <NNumberField
      :default-value="0.34"
      :step="0.01"
      :format-options="{
        style: 'percent',
      }"
    />

    <NNumberField
      :default-value="55"
      :format-options="{
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'code',
        currencySign: 'accounting',
      }"
    />
  </div>
</template>
