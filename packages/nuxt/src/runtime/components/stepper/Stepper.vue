<script lang="ts" setup generic="T extends Partial<NStepperItemProps>">
import type { ComputedRef } from 'vue'
import type { NStepperEmits, NStepperItemProps, NStepperProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { StepperRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, useTemplateRef } from 'vue'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'
import StepperContainer from './StepperContainer.vue'
import StepperDescription from './StepperDescription.vue'
import StepperHeader from './StepperHeader.vue'
import StepperIndicator from './StepperIndicator.vue'
import StepperItem from './StepperItem.vue'
import StepperSeparator from './StepperSeparator.vue'
import StepperTitle from './StepperTitle.vue'
import StepperTrigger from './StepperTrigger.vue'
import StepperWrapper from './StepperWrapper.vue'

const props = withDefaults(defineProps<NStepperProps<T>>(), {
  orientation: 'horizontal',
  stepper: 'solid-primary',
})
const emits = defineEmits<NStepperEmits<T>>()

const modelValue = defineModel<string | number>()

const delegatedProps = reactiveOmit(props, [
  'class',
  'una',
])
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const stepper = useTemplateRef<InstanceType<typeof StepperRoot>>('stepper')

const currentStepIndex = computed({
  get() {
    const value = modelValue.value ?? props.defaultValue
    return ((typeof value === 'string')
      ? props.items?.findIndex(item => item.value === value)
      : value) ?? 0
  },
  set(value) {
    modelValue.value = props.items?.[value]?.value ?? value
  },
})
const currentStep = computed(() => props.items?.[currentStepIndex.value]) as ComputedRef<T>
const isEveryItemHasStep = computed(() => props.items?.every(item => item.step))

const hasNextStep = computed(() => currentStepIndex.value < props.items!.length - 1)
const hasPrevStep = computed(() => currentStepIndex.value > 0)

defineExpose({
  goToStep: (step: number) => {
    currentStepIndex.value = step
    stepper.value?.goToStep(step)
  },
  nextStep: () => {
    if (!hasNextStep.value)
      return
    currentStepIndex.value += 1
    stepper.value?.nextStep()
    emits('next', currentStep.value)
  },
  prevStep: () => {
    if (!hasPrevStep.value)
      return
    currentStepIndex.value -= 1
    stepper.value?.prevStep()
    emits('prev', currentStep.value)
  },
  hasNext: () => hasNextStep.value,
  hasPrev: () => hasPrevStep.value,
})
</script>

<template>
  <StepperRoot
    ref="stepper"
    v-slot="slotProps"
    v-bind="forwarded"
    v-model="currentStepIndex"
    :class="cn(
      'stepper',
      orientation === 'horizontal' && 'stepper-horizontal',
      props.class,
    )"
    :una
  >
    <slot v-bind="slotProps">
      <StepperWrapper :una v-bind="props._stepperWrapper" :orientation>
        <slot name="wrapper" :items>
          <StepperItem
            v-for="(item, idx) in items"
            :key="isEveryItemHasStep ? item.step : idx"
            :step="isEveryItemHasStep ? item.step! : idx"
            :disabled="item.disabled ?? props.disabled"
            :una
            v-bind="props._stepperItem"
            :orientation
          >
            <slot name="item" :item="item" :step="isEveryItemHasStep ? item.step! : idx">
              <StepperContainer :orientation :una v-bind="props._stepperContainer">
                <StepperTrigger v-bind="props._stepperTrigger" :una :stepper="props.stepper" :size="size ?? item.size">
                  <slot name="trigger" :item="item">
                    <StepperIndicator
                      v-slot="{ step }"
                      v-bind="props._stepperIndicator"
                      :una
                      :size="size ?? item.size"
                      :stepper="props.stepper"
                    >
                      <slot name="indicator" :item :step>
                        <Icon v-if="item.icon" :name="item.icon" :size="size ?? item.size" />
                        <template v-else>
                          {{ idx + 1 }}
                        </template>
                      </slot>
                    </StepperIndicator>
                  </slot>
                </StepperTrigger>
                <StepperSeparator
                  v-if="items && idx < items.length - 1"
                  v-bind="props._stepperSeparator"
                  :una
                  :stepper="props.stepper"
                  :orientation
                />
              </StepperContainer>
              <StepperHeader :una v-bind="props._stepperHeader" :orientation>
                <slot name="header" :item="item">
                  <StepperTitle v-if="item.title" :una v-bind="props._stepperTitle" :size="size ?? item.size">
                    <slot name="title" :item="item">
                      {{ item.title }}
                    </slot>
                  </StepperTitle>
                  <StepperDescription v-if="item.description" :una v-bind="props._stepperDescription" :size="size ?? item.size">
                    <slot name="description" :item="item">
                      {{ item.description }}
                    </slot>
                  </StepperDescription>
                </slot>
              </StepperHeader>
            </slot>
          </StepperItem>
        </slot>
      </StepperWrapper>
      <slot
        v-if="!!$slots.content || currentStep?.slot"
        :name="currentStep?.slot ?? 'content'"
        :item="currentStep"
      />
    </slot>
  </StepperRoot>
</template>
