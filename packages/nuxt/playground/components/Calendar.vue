<script setup lang="ts">
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const value = ref([today(getLocalTimeZone())]) as Ref<DateValue[]>
</script>

<template>
  <div>
    {{ value }}

    <NCalendar
      v-model="value"
      calendar-label="Date of birth"
      :number-of-months="4"
      multiple
    />

    <NCalendar
      v-model="value"
      weekday-format="narrow"
    />

    <NCalendar
      v-model="value"
      weekday-format="short"
    />
  </div>
</template>
