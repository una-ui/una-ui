<script setup lang="ts">
import { computed } from 'vue'
import type { NFormGroupProps } from '../../types'
import NFormGroupDefaultSlot from '../slots/FormGroupDefault'
import FormGroupLabel from '../slots/FormGroupLabel'
import { randomId } from '../../utils'

const props = withDefaults(defineProps<NFormGroupProps>(), {
  for: undefined,
})

const id = computed(() => props.id ?? randomId('form-group'))

const statusClassVariants = computed(() => {
  const text = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    default: 'text-$c-gray-500',
  }

  return text[props.status ?? 'default']
})
</script>

<template>
  <div
    form-group
  >
    <slot name="top">
      <div
        form-group="message-wrapper"
        :class="una?.formGroupMessageWrapper"
      >
        <div
          v-if="label || hint || description"
          form-group="top-wrapper"
          :class="una?.formGroupTopWrapper"
        >
          <div
            v-if="label || hint"
            form-group="top-wrapper-inner"
            :class="una?.formGroupTopWrapperInner"
          >
            <slot name="label">
              <FormGroupLabel
                :id="id"
                :for="props.for"
                form-group="label-wrapper"
                :class="una?.formGroupLabelWrapper"
              >
                <span
                  form-group="label"
                  :class="una?.formGroupLabel"
                >
                  {{ label }}
                </span>
                <span
                  v-if="required"
                  form-group="label-required"
                  :class="una?.formGroupLabelRequired"
                />
              </FormGroupLabel>
            </slot>

            <slot name="hint">
              <span
                v-if="hint"
                form-group="hint"
                :class="una?.formGroupHint"
              >
                {{ hint }}
              </span>
            </slot>
          </div>

          <slot name="description">
            <span
              v-if="description"
              form-group="description"
              :class="una?.formGroupDescription"
            >
              {{ description }}
            </span>
          </slot>
        </div>
      </div>
    </slot>

    <NFormGroupDefaultSlot
      :id="id"
      :status="status"
    >
      <slot />
    </NFormGroupDefaultSlot>

    <slot name="bottom">
      <div
        v-if="message || counter"
        form-group="bottom-wrapper"
        :class="[
          { 'justify-end': !message && counter },
          una?.formGroupBottomWrapper,
        ]"
      >
        <slot name="message">
          <div
            v-if="message"
            form-group="message-wrapper"
            :class="una?.formGroupMessageWrapper"
          >
            <p
              form-group="message"
              :class="[
                una?.formGroupMessage,
                statusClassVariants,
              ]"
            >
              {{ message }}
            </p>
          </div>
        </slot>

        <slot name="counter">
          <div
            v-if="counter"
            form-group="counter-wrapper"
            :class="una?.formGroupCounterWrapper"
          >
            <span
              :class="`${counter?.value >= (counter?.max || 0) && counter?.max
                ? 'form-group-counter-error'
                : 'form-group-counter-current'}`"
            >
              {{ counter?.value }}
            </span>
            <span v-if="counter?.max" form-group="counter-separator">/</span>
            <span v-if="counter?.max" form-group="counter-max">{{ counter?.max }}</span>
          </div>
        </slot>
      </div>
    </slot>
  </div>
</template>
