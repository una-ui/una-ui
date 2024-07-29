<script setup lang="ts">
import { computed } from 'vue'
import type { SelectRootEmits } from 'radix-vue'
import {
  useForwardPropsEmits,
} from 'radix-vue'
import type { NSelectProps } from '../../../types'
import SelectRoot from './SelectRoot.vue'
import SelectTrigger from './SelectTrigger.vue'

// import SelectGroup './SelectGroup.vue'
import SelectItem from './SelectItem.vue'

const props = defineProps<NSelectProps>()
const emits = defineEmits<SelectRootEmits>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SelectRoot
    v-bind="forwarded"
  >
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <selectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">
          Apple
        </SelectItem>
        <SelectItem value="banana">
          Banana
        </SelectItem>
        <SelectItem value="blueberry">
          Blueberry
        </SelectItem>
        <SelectItem value="grapes">
          Grapes
        </SelectItem>
        <SelectItem value="pineapple">
          Pineapple
        </SelectItem>
      </SelectGroup>
    </selectContent>
  </SelectRoot>
</template>
