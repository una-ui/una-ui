<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'
import { staticInput } from '@nexvelt/ui-preset/shortcuts'

interface TableItem {
  name: string
  classes: string
}

const staticData = ref<TableItem[]>([])
const search = ref('')

const { results } = useFuse(search, staticData, {
  fuseOptions: {
    keys: ['name', 'classes'],
    isCaseSensitive: false,
  },
  matchAllWhenSearchEmpty: true,
})

onMounted(() => {
  const resultArray = Object.entries(staticInput).map(([name, classes]) => ({
    name,
    classes,
  }))
  staticData.value = resultArray
})
</script>

<template>
  <div class="relative">
    <input
      v-model="search"
      placeholder="Search"
      input="outline"
    >
    <table>
      <thead>
        <tr>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Classes
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in results" :key="data.refIndex">
          <td class="whitespace-nowrap">
            <span class="text-xs text-gray">
              {{ data.refIndex + 1 }}.
            </span>
            <span class="rounded-md bg-primary/5 px-2 py-.5 text-sm text-primary !font-medium">
              {{ data.item.name }}
              <!-- change case | vueuse -->
            </span>
          </td>
          <td class="whitespace-nowrap text-gray">
            {{ data.item.classes }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
