<script setup lang="ts">
import type { NStepperItemProps } from '@una-ui/nuxt/runtime/types/stepper.js'

const items: Partial<NStepperItemProps>[] = [
  {
    title: 'Address',
    description: 'Add your address here',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
]
</script>

<template>
  <NStepper>
    <NStepperWrapper>
      <NStepperItem v-for="(item, idx) in items" :key="idx" :step="idx">
        <NStepperContainer>
          <NStepperTrigger>
            <NStepperIndicator>
              <NIcon v-if="item.icon" :name="item.icon" />
              <template v-else>
                {{ idx + 1 }}
              </template>
            </NStepperIndicator>
          </NStepperTrigger>
          <NStepperSeparator v-if="items && idx < items.length - 1" />
        </NStepperContainer>
        <NStepperHeader>
          <NStepperTitle>{{ item.title }}</NStepperTitle>
          <NStepperDescription>{{ item.description }}</NStepperDescription>
        </NStepperHeader>
      </NStepperItem>
    </NStepperWrapper>
  </NStepper>
</template>
