<script setup lang="ts">
const selected = ref()
const selected2 = ref()
const selected3 = ref()
const selectedMultiple = ref([])
const selectedMultipleObj = ref([])
const selectedStatus = ref()

const alphabetItems = [
  {
    label: 'A',
    items: ['Apple', 'Aeroplane', 'Ant'],
  },
  {
    label: 'B',
    items: ['Banana', 'Ball', 'Bat'],
  },
  {
    label: 'C',
    items: ['Cat', 'Car', 'Cup'],
  },
  {
    label: 'D',
    items: ['Dog', 'Duck', 'Doll'],
  },
]

const communityItems = [
  {
    label: 'React Community',
    items: ['Theo', 'John', 'Jane'],
  },
  {
    label: 'Vue Community',
    items: ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter'],
  },
]

const simpleItems = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']

const objectItems = [
  { id: 1, name: 'Evan You', role: 'Creator' },
  { id: 2, name: 'Anthony Fu', role: 'Core Team' },
  { id: 3, name: 'Daniel Roe', role: 'Core Team' },
  { id: 4, name: 'Pooya Parsa', role: 'Core Team' },
]
</script>

<template>
  <div class="space-y-8">
    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Multiple Select
      </NLabel>
      <NSelect
        v-model="selectedMultiple"
        :items="simpleItems"
        placeholder="Select Contributors"
        label="Vue Community"
        multiple
      />
      <pre class="mt-2">{{ selectedMultiple }}</pre>
    </div>

    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Basic Select
      </NLabel>
      <NSelect
        v-model="selected"
        :items="simpleItems"
        placeholder="Select Contributor"
        label="Vue Community"
      />
      <pre class="mt-2">{{ selected }}</pre>
    </div>

    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Grouped Alphabet Items
      </NLabel>
      <NSelect
        v-model="selected2"
        :items="alphabetItems"
        group
        placeholder="Select Option"
      />
      <pre class="mt-2">{{ selected2 }}</pre>
    </div>

    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Grouped Community Items
      </NLabel>
      <NSelect
        v-model="selected3"
        :items="communityItems"
        group
        placeholder="Select Community Member"
      />
      <pre class="mt-2">{{ selected3 }}</pre>
    </div>

    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Multiple Select with Objects
      </NLabel>
      <NSelect
        v-model="selectedMultipleObj"
        :items="objectItems"
        placeholder="Select Contributors"
        label="Vue Community"
        multiple
        item-key="name"
        value-key="name"
      />
      <pre class="mt-2">{{ selectedMultipleObj }}</pre>
    </div>

    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Status Examples
      </NLabel>
      <div class="space-y-2">
        <NSelect
          v-model="selectedStatus"
          :items="simpleItems"
          placeholder="Info Status"
          label="Vue Community"
          status="info"
        />
        <NSelect
          v-model="selectedStatus"
          :items="simpleItems"
          placeholder="Success Status"
          label="Vue Community"
          status="success"
        />
        <NSelect
          v-model="selectedStatus"
          :items="simpleItems"
          placeholder="Warning Status"
          label="Vue Community"
          status="warning"
        />
        <NSelect
          v-model="selectedStatus"
          :items="simpleItems"
          placeholder="Error Status"
          label="Vue Community"
          status="error"
        />
      </div>
    </div>
  </div>
</template>
