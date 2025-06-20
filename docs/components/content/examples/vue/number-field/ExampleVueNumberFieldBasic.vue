<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
</script>

<template>
  <div class="space-y-4">
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

      <NNumberField
        :default-value="89"
        leading="i-lucide-arrow-down"
        trailing="i-lucide-arrow-up"
      />
    </div>
    <div class="flex items-center gap-4">
      <NNumberField
        :default-value="144"
        size="xs"
      />

      <div class="flex">
        <NNumberField
          :default-value="144"
          size="xl"
        />
      </div>

      <div class="flex">
        <NNumberField
          :default-value="144"
          size="3xl"
        />
      </div>
    </div>
  </div>
</template>
