<script setup lang="ts">
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
// v-model now stores FULL OBJECTS, not extracted values
const selectedFramework = ref<typeof frameworks[number][]>([])
const selectedFrameworks = ref<typeof frameworks[number][]>([])

const users = [
  { id: '1', username: 'shadcn' },
  { id: '2', username: 'leerob' },
  { id: '3', username: 'evilrabbit' },
]
// v-model stores the full user object
const selectedUser = ref<typeof users[number]>()

const timezones = [
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

type Timezone = typeof timezones[0]
// v-model stores the full timezone object
const selectedTimezone = ref<Timezone['items'][number]>(timezones[0].items[0])
const selectedGroup = computed(() => timezones.find(group => group.items.some(tz => tz.value === selectedTimezone.value?.value)))
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <!-- Custom manual example -->
    <NCombobox
      v-model="selectedFramework"
      label-key="label"
      value-key="value"
      multiple
    >
      <NComboboxAnchor as-child>
        <NComboboxTrigger>
          {{ selectedFramework.length > 0 ? selectedFramework.map(f => f.label).join(', ') : 'Select framework...' }}
        </NComboboxTrigger>
      </NComboboxAnchor>

      <NComboboxList>
        <NComboboxInput
          class="border-0 border-b-1 rounded-none placeholder:text-gray-500 focus-visible:ring-0"
          placeholder="Select framework..."
        />

        <NComboboxEmpty>
          No framework found.
        </NComboboxEmpty>

        <NComboboxGroup>
          <NComboboxItem
            v-for="framework in frameworks"
            :key="framework.value"
            :value="framework"
          >
            {{ framework.label }}

            <NComboboxItemIndicator>
              <NIcon name="i-lucide-check" />
            </NComboboxItemIndicator>
          </NComboboxItem>
        </NComboboxGroup>
      </NComboboxList>
    </NCombobox>

    <!-- Simple auto-generated example -->
    <NCombobox
      v-model="selectedFramework"
      :items="frameworks"
      label-key="label"
      value-key="value"
      multiple
      :_combobox-input="{
        placeholder: 'Select framework...',
      }"
    />

    <!-- Custom slots example with users -->
    <NCombobox
      v-model="selectedUser"
      :items="users"
      label-key="username"
      value-key="id"
      :_combobox-input="{
        placeholder: 'Select user...',
      }"
    >
      <template #trigger>
        <template v-if="selectedUser">
          <div class="flex items-center gap-2">
            <NAvatar
              :src="`https://github.com/${selectedUser.username}.png`"
              :alt="selectedUser.username"
              square="5"
            />
            {{ selectedUser.username }}
          </div>
        </template>
        <template v-else>
          Select user...
        </template>
      </template>

      <template #label="{ item }">
        <NAvatar
          square="5"
          :src="`https://github.com/${item.username}.png`"
          :alt="item.username"
        />
        {{ item.username }}
      </template>
    </NCombobox>

    <!-- Grouped items example -->
    <NCombobox
      v-model="selectedTimezone"
      :items="timezones"
      label-key="label"
      value-key="value"
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
    >
      <template #trigger>
        <template v-if="selectedTimezone">
          <div class="flex flex-col items-start gap-0.5">
            <span class="text-xs font-normal opacity-75">
              {{ selectedGroup?.label }}
            </span>
            <span>{{ selectedTimezone.label }}</span>
          </div>
        </template>
        <template v-else>
          Select timezone...
        </template>
      </template>
    </NCombobox>

    <!-- Multiple selection example -->
    <NCombobox
      v-model="selectedFrameworks"
      :items="frameworks"
      label-key="label"
      value-key="value"
      multiple
      :_combobox-input="{
        placeholder: 'Select frameworks (multi-select)...',
      }"
      :_combobox-list="{
        class: 'w-300px',
        align: 'start',
      }"
    >
      <template #trigger>
        {{ selectedFrameworks.length
          ? selectedFrameworks.map(f => f.label).join(", ")
          : "Select frameworks (multi-select)..." }}
      </template>

      <template #item="{ item, selected }">
        <NCheckbox
          :model-value="selected"
        />

        {{ item.label }}
      </template>
    </NCombobox>
  </div>
</template>
