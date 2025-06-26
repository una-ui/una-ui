<script setup lang="ts">
interface PlanItem {
  value: string
  label: string
  description: string
  price: string
}

const plans = ref<PlanItem[]>([
  { value: 'hobby', label: 'Hobby', description: 'Perfect for hobby projects and small teams - Free', price: '$0/month' },
  { value: 'pro', label: 'Professional', description: 'For professional developers and teams - $19/month', price: '$19/month' },
  { value: 'enterprise', label: 'Enterprise', description: 'Custom solutions for large organizations - $99/month', price: '$99/month' },
])

const themes = ref([
  { value: 'light', label: 'Light', description: 'For bright environments' },
  { value: 'dark', label: 'Dark', description: 'Easier on the eyes' },
  { value: 'system', label: 'System', description: 'Follows your system preference' },
])

const sizes = ref(['sm', 'md', 'lg'])

const selectedPlan = ref('hobby')
const selectedTheme = ref('system')
const selectedSize = ref('md')
</script>

<template>
  <div class="flex flex-col gap-8 p-4">
    <!-- Basic usage -->
    <div class="space-y-2">
      <h3 class="font-semibold">
        Basic
      </h3>
      <NRadioGroup
        v-model="selectedSize"
        :items="sizes"
      />
    </div>

    <!-- Horizontal with custom icon -->
    <div class="space-y-2">
      <h3 class="font-semibold">
        Theme Selector
      </h3>
      <NRadioGroup
        v-model="selectedTheme"
        orientation="horizontal"
        :items="themes"
      />
    </div>

    <!-- Complex example with pricing -->
    <div class="space-y-2">
      <h3 class="font-semibold">
        Pricing Plans
      </h3>
      <NRadioGroup
        v-model="selectedPlan"
        radio-group="primary"
        :items="plans"
      />
    </div>

    <div class="rounded bg-muted p-4">
      <p>Selected Size: {{ selectedSize }}</p>
      <p>Selected Theme: {{ selectedTheme }}</p>
      <p>Selected Plan: {{ selectedPlan }}</p>
    </div>
  </div>
</template>
