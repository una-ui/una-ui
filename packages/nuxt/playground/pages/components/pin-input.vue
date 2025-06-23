<script setup lang="ts">
import { PinInputInput, PinInputRoot, Primitive } from 'reka-ui'
</script>

<template>
  <PinInputRoot
    data-slot="pin-input"
    class="flex items-center gap-1 disabled:cursor-not-allowed has-disabled:opacity-50"
  >
    <Primitive
      data-slot="pin-input-group"
      class="flex items-center"
    >
      <PinInputInput
        :index="0"
        data-slot="pin-input-slot"
        class="aria-invalid:border-destructive shadow-xs focus:aria-invalid:ring-destructive/20 focus:aria-invalid:border-destructive focus:ring-ring/50 focus:ring-[3px] focus:border-ring dark:focus:aria-invalid:ring-destructive/40 relative h-9 w-9 flex items-center justify-center border-y border-r border-input text-center text-sm outline-none transition-all focus:z-10 first:border-l first:rounded-l-md last:rounded-r-md dark:bg-input/30"
      />
      <Primitive
        data-slot="pin-input-separator"
      >
        <NIcon name="i-lucide-minus" />
      </Primitive>
      <PinInputInput
        :index="1"
        data-slot="pin-input-slot"
        class="focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive shadow-xs focus:ring-[3px] relative h-9 w-9 flex items-center justify-center border-y border-r border-input text-center text-sm outline-none transition-all focus:z-10 first:border-l first:rounded-l-md last:rounded-r-md dark:bg-input/30"
      />
      <Primitive
        data-slot="pin-input-separator"
      >
        <NIcon name="i-lucide-minus" />
      </Primitive>
      <PinInputInput
        :index="2"
        data-slot="pin-input-slot"
        class="focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive shadow-xs focus:ring-[3px] relative h-9 w-9 flex items-center justify-center border-y border-r border-input text-center text-sm outline-none transition-all focus:z-10 first:border-l first:rounded-l-md last:rounded-r-md dark:bg-input/30"
      />
      <Primitive
        data-slot="pin-input-separator"
      >
        <NIcon name="i-lucide-minus" />
      </Primitive>
      <PinInputInput
        :index="3"
        data-slot="pin-input-slot"
        class="focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive shadow-xs focus:ring-[3px] relative h-9 w-9 flex items-center justify-center border-y border-r border-input text-center text-sm outline-none transition-all focus:z-10 first:border-l first:rounded-l-md last:rounded-r-md dark:bg-input/30"
      />
      <Primitive
        data-slot="pin-input-separator"
      >
        <NIcon name="i-lucide-minus" />
      </Primitive>
      <PinInputInput
        :index="4"
        data-slot="pin-input-slot"
        class="focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive shadow-xs focus:ring-[3px] relative h-9 w-9 flex items-center justify-center border-y border-r border-input text-center text-sm outline-none transition-all focus:z-10 first:border-l first:rounded-l-md last:rounded-r-md dark:bg-input/30"
      />
    </Primitive>
  </PinInputRoot>
</template>
