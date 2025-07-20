<script setup lang="ts">
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFramework = ref<typeof frameworks[number]>()
const selectedFrameworks = ref<typeof frameworks[number][]>([])

const users = [
  { id: '1', username: 'shadcn' },
  { id: '2', username: 'leerob' },
  { id: '3', username: 'evilrabbit' },
]
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
const selectedTimezone = ref<Timezone['items'][number]>(timezones[0].items[0])
const selectedGroup = computed(() => timezones.find(group => group.items.find(tz => tz.value === selectedTimezone.value?.value)))
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NCombobox
      v-model="selectedFramework"
      by="label"
    >
      <NComboboxAnchor as-child>
        <NComboboxTrigger>
          {{ selectedFramework?.label ?? 'Select framework...' }}
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

    <NCombobox
      v-model="selectedFramework"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
      }"
      by="label"
    />

    <NCombobox
      v-model="selectedUser"
      :items="users"
      by="username"
      :_combobox-input="{
        placeholder: 'Select user...',
      }"
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          <div class="flex items-center gap-2">
            <NAvatar
              :src="`https://github.com/${modelValue.username}.png`"
              :alt="modelValue.username"
              square="5"
            />
            {{ modelValue.username }}
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

      <template #footer>
        <NComboboxSeparator />
        <NComboboxGroup>
          <NComboboxItem :value="null">
            <NIcon name="i-lucide-plus-circle" />
            Create user
          </NComboboxItem>
        </NComboboxGroup>
      </template>
    </NCombobox>

    <NCombobox
      v-model="selectedTimezone"
      :items="timezones"
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
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          <div class="flex flex-col items-start gap-0.5">
            <span class="text-xs font-normal opacity-75">
              {{ selectedGroup?.label }}
            </span>
            <span>{{ modelValue.label }}</span>
          </div>
        </template>
        <template v-else>
          Select timezone...
        </template>
      </template>
    </NCombobox>

    <NCombobox
      v-model="selectedFrameworks"
      :items="frameworks"
      by="label"
      multiple
      :_combobox-input="{
        placeholder: 'Select frameworks (multi-select)...',
      }"
      :_combobox-list="{
        class: 'w-300px',
        align: 'start',
      }"
      :_combobox-anchor="{
      }"
    >
      <template #trigger="{ modelValue }">
        {{ modelValue?.length
          ? modelValue.map(val => {
            const framework = frameworks.find(f => f.value === val.value)
            return framework ? framework.label : val
          }).join(", ")
          : "Select frameworks (multi-select)..." }}
      </template>

      <template #item="{ item, selected }">
        <NCheckbox
          :data-selected="selected"
          :model-value="selected"
        />

        {{ item.label }}
      </template>
    </NCombobox>
  </div>
</template>
