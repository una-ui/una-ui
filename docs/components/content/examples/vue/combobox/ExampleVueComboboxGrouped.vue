<script setup lang="ts">
const timezoneGroups = [
  {
    label: 'Americas',
    items: [
      { value: 'America/New_York', label: '(GMT-5) New York' },
      { value: 'America/Los_Angeles', label: '(GMT-8) Los Angeles' },
      { value: 'America/Chicago', label: '(GMT-6) Chicago' },
      { value: 'America/Toronto', label: '(GMT-5) Toronto' },
      { value: 'America/Vancouver', label: '(GMT-8) Vancouver' },
      { value: 'America/Sao_Paulo', label: '(GMT-3) São Paulo' },
    ],
  },
  {
    label: 'Europe',
    items: [
      { value: 'Europe/London', label: '(GMT+0) London' },
      { value: 'Europe/Paris', label: '(GMT+1) Paris' },
      { value: 'Europe/Berlin', label: '(GMT+1) Berlin' },
      { value: 'Europe/Rome', label: '(GMT+1) Rome' },
      { value: 'Europe/Madrid', label: '(GMT+1) Madrid' },
      { value: 'Europe/Amsterdam', label: '(GMT+1) Amsterdam' },
    ],
  },
  {
    label: 'Asia/Pacific',
    items: [
      { value: 'Asia/Tokyo', label: '(GMT+9) Tokyo' },
      { value: 'Asia/Shanghai', label: '(GMT+8) Shanghai' },
      { value: 'Asia/Singapore', label: '(GMT+8) Singapore' },
      { value: 'Asia/Dubai', label: '(GMT+4) Dubai' },
      { value: 'Australia/Sydney', label: '(GMT+11) Sydney' },
      { value: 'Asia/Seoul', label: '(GMT+9) Seoul' },
    ],
  },
]

const timezones = timezoneGroups.flatMap(group =>
  group.items.map(item => ({
    ...item,
    group: group.label,
  })),
)

const selectedTimezone = ref(timezones[0])
</script>

<template>
  <div class="max-w-xs w-full">
    <NCombobox
      v-model="selectedTimezone"
      :items="timezoneGroups"
      by="value"
      :_combobox-input="{
        placeholder: 'Select timezone...',
      }"
      :_combobox-list="{
        class: 'w-300px',
        align: 'start',
      }"
      :_combobox-viewport="{
        class: 'max-h-260px',
      }"
      :_combobox-trigger="{
        class: 'h-12 px-2.5',
      }"
      :group-separator="true"
    >
      <template #trigger>
        <template v-if="selectedTimezone">
          <div class="flex flex-col items-start gap-0.5">
            <span class="text-xs font-normal opacity-75">
              {{ selectedTimezone.group }}
            </span>
            <span>{{ selectedTimezone.label }}</span>
          </div>
        </template>
        <template v-else>
          Select timezone...
        </template>
      </template>
    </NCombobox>
  </div>
</template>
