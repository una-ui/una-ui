<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, title }">
    <div class="flex flex-col gap-2">
      <span class="text-sm font-medium">
        {{ title }}
      </span>
      <component :is="$slots.default" />
    </div>
  </DefineTemplate>
  <div class="flex flex-wrap items-center justify-around gap-10">
    <ReuseTemplate title="outline-green">
      <NPinInput pin-input="outline-green" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-indigo">
      <NPinInput pin-input="outline-indigo" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-error">
      <NPinInput pin-input="outline-error" />
    </ReuseTemplate>
  </div>
</template>
