<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
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
} from 'radix-vue'

const fruit = ref()

const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']
</script>

<template>
  <SelectRoot v-model="fruit">
    <SelectTrigger
      class="h-[35px] min-w-[160px] inline-flex items-center justify-between gap-[5px] rounded bg-primary px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-info data-[placeholder]:text-green9 text-success focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customize options"
    >
      <Icon
        icon="radix-icons:chevron-down"
        class="h-3.5 w-3.5 text-base"
      />
      <SelectValue placeholder="Select a fruit..." class="text-md text-base" />
      <Icon
        icon="radix-icons:chevron-down"
        class="h-3.5 w-3.5 text-base"
      />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100] min-w-[160px] rounded bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        :side-offset="5"
      >
        <SelectScrollUpButton class="text-violet11 h-[25px] flex cursor-default items-center justify-center bg-white">
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectLabel class="px-[25px] text-xs leading-[25px] text-success">
            Fruits
          </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              class="text-grass11 data-[disabled]:text-mauve8 relative h-[25px] flex select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:outline-none"
              :value="option"
            >
              <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                <span class="text-base">{{ option }}</span>
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
          <SelectSeparator class="m-[5px] h-[1px] bg-green6" />
          <SelectLabel class="px-[25px] text-xs leading-[25px] text-success">
            Vegetables
          </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in vegetables"
              :key="index"
              class="text-grass11 data-[disabled]:text-mauve8 relative h-[25px] flex select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:outline-none"
              :value="option"
              :disabled="option === 'Courgette'"
            >
              <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                <span class="text-$c-gray-500">{{ option }}</span>
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

  <NButton label="button" btn="soft-primary" />
</template>
