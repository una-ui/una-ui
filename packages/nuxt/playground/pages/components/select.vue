<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  contributor: z.string().min(1, 'This field is required'),
}))

useForm({
  validationSchema: formSchema,
})

const selected = ref<string>()
const selected2 = ref<string>()
const selected3 = ref<string>()
const selectedMultiple = ref<string[]>([])
const selectedMultipleObj = ref<{ id: number, name: string, role: string }[]>()
const selectedStatus = ref<string>()
const selectedCustom = ref<string>()

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
    <form>
      <div class="flex items-end">
        <NFormField
          name="contributor"
          label="Contributor"
          description="Select a contributor from the Vue community"
          required
        >
          <NSelect
            v-model="selected"
            placeholder="Options"
            :items="simpleItems"
          />
        </NFormField>
      </div>
    </form>

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
      >
        <template #trigger="{ modelValue }">
          {{ modelValue }}
        </template>
        <template #item="{ item }">
          {{ item }}
        </template>
      </NSelect>
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
      >
        <template #trigger="{ modelValue }">
          {{ modelValue }}
        </template>
      </NSelect>
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

    <div class="max-w-50 flex flex-col space-y-2">
      <NLabel>
        Custom Content Items
      </NLabel>
      <div clas="space-y-2">
        <NSelect v-model="selectedCustom">
          <template #content>
            <NSelectItem value="custom-1">
              Custom Item 1
            </NSelectItem>
            <NSelectItem value="custom-2" disabled>
              Custom Item 2 (Disabled)
            </NSelectItem>
            <NSelectItem value="custom-3">
              Custom Item 3
            </NSelectItem>
          </template>
        </NSelect>
      </div>
    </div>
  </div>
</template>
