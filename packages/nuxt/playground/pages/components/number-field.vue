<script setup lang="ts">
const value = ref(1)
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NNumberField v-model="value" />

    <NNumberField
      id="number"
      :default-value="5"
      :format-options="{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
      }"
    />

    <NNumberField
      id="percent"
      :default-value="0.05"
      :step="0.01"
      :format-options="{
        style: 'percent',
      }"
    />

    <NNumberField
      id="balance"
      :default-value="1500"
      :format-options="{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting',
      }"
    />
  </div>
</template>
