<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

interface User {
  firstName: string
}

interface UserResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}

const skip = ref(0)

const { data, status, execute, pending } = await useFetch(
  'https://dummyjson.com/users?limit=10&select=firstName',
  {
    key: 'combobox-infinite-scroll',
    params: { skip },
    transform: (data?: UserResponse) => {
      return data?.users.map(user => user.firstName)
    },
    lazy: true,
    immediate: false,
  },
)

const users = ref<string[]>([])

watch(data, () => {
  users.value = [...users.value, ...(data.value || [])]
})

execute()

const combobox = useTemplateRef('combobox')

onMounted(() => {
  useInfiniteScroll(
    () => combobox.value?.viewportRef?.$el,
    () => {
      skip.value += 10
    },
    {
      canLoadMore: () => {
        return status.value !== 'pending'
      },
    },
  )
})
</script>

<template>
  <div class="flex">
    <NCombobox
      ref="combobox"
      :items="users"
      :_combobox-input="{
        loading: pending,
        placeholder: 'Searching...',
      }"
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          {{ modelValue }}
        </template>
        <template v-else>
          Select user...
        </template>
      </template>
    </NCombobox>
  </div>
</template>
