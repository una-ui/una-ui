<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  {{ value }}

  <NCalendar v-model="value" weekday-format="short" />
</template>
