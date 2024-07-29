<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import type { SelectRootEmits } from 'radix-vue'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  useForwardPropsEmits,
} from 'radix-vue'
import type { NSelectProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSelectProps>()
const emits = defineEmits<SelectRootEmits>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  {{ props.options }}
  <SelectRoot
    :class="cn(
      'select-root',
      props.size,
      props.class,
      props.defaultOpen,
      props.dir,
      props.required,
      props.una?.selectRoot,
      disabled && 'select-disabled',
    )"
    v-bind="forwarded"
  >
    <SelectTrigger
      class="h-[35px] min-w-[160px] inline-flex items-center justify-between gap-[5px] rounded bg-gray px-[15px] text-[13px] text-primary leading-none shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-gray data-[placeholder]:text-primary focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customize options"
    >
      <SelectValue placeholder="Select a fruit..." />
      <Icon
        icon="radix-icons:chevron-down"
        class="h-3.5 w-3.5"
      />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100] min-w-[160px] rounded bg-gray shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        :side-offset="5"
      >
        <SelectScrollUpButton class="h-[25px] flex cursor-default items-center justify-center bg-white text-violet">
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectLabel class="px-[25px] text-xs leading-[25px] text-success">
            Fruits
          </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in props.options"
              :key="index"
              class="relative h-[25px] flex select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] text-primary leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-primary data-[disabled]:text-gray data-[highlighted]:text-primary data-[highlighted]:outline-none"
              :value="option"
            >
              <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
          <SelectSeparator class="m-[5px] h-[1px] bg-primary" />
          <SelectLabel class="px-[25px] text-xs text-gray leading-[25px]">
            Vegetables
          </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              class="relative h-[25px] flex select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] text-primary leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-primary data-[disabled]:text-gray data-[highlighted]:text-primary data-[highlighted]:outline-none"
              :value="option"
              :disabled="option === 'Courgette'"
            >
              <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton class="text-violet11 h-[25px] flex cursor-default items-center justify-center bg-white">
          <Icon icon="radix-icons:chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
