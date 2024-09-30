<script setup lang="ts">
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'

const value = ref<DateValue>(today(getLocalTimeZone()))
</script>

<template>
  <div class="grid place-items-center gap-4">
    value: {{ value }}

    <NCalendar
      v-model="value"
    />
  </div>
</template>
