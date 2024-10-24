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
  <div class="flex flex-wrap items-center gap-10">
    <ReuseTemplate title="outline-green">
      <NPinInput pin-input="outline-green" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-indigo">
      <NPinInput pin-input="outline-indigo" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-info">
      <NPinInput pin-input="outline-info" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-error">
      <NPinInput pin-input="outline-error" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-black">
      <NPinInput pin-input="outline-black" />
    </ReuseTemplate>

    <ReuseTemplate title="outline-gray">
      <NPinInput pin-input="outline-gray" />
    </ReuseTemplate>
  </div>
</template>
