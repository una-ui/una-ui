<script setup lang="ts">
import { computed } from 'vue'
import type { NFormGroupProps } from '../../types'
import NFormGroupDefaultSlot from '../slots/FormGroupDefault'
import { randomId } from '../../utils'

const props = defineProps<NFormGroupProps>()

const id = randomId('form-group')

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
        :class="nv?.formGroupMessageWrapper"
      >
        <div
          v-if="label || hint || description"
          form-group="top-wrapper"
          :class="nv?.formGroupTopWrapper"
        >
          <div
            v-if="label || hint"
            form-group="top-wrapper-inner"
            :class="nv?.formGroupTopWrapperInner"
          >
            <slot name="label">
              <label
                v-if="label"
                :for="name ?? id"
                form-group="label-wrapper"
                :class="nv?.formGroupLabelWrapper"
              >
                <span
                  form-group="label-base"
                  :class="nv?.formGroupLabelBase"
                >
                  {{ label }}
                </span>
                <span
                  v-if="required"
                  form-group="label-required"
                  :class="nv?.formGroupLabelRequired"
                />
              </label>
            </slot>

            <slot name="hint">
              <span
                v-if="hint" form-group="hint-base"
                :class="nv?.formGroupHintBase"
              >
                {{ hint }}
              </span>
            </slot>
          </div>

          <slot name="description">
            <span
              v-if="description"
              form-group="description-base"
              :class="nv?.formGroupDescriptionBase"
            >
              {{ description }}
            </span>
          </slot>
        </div>
      </div>
    </slot>

    <NFormGroupDefaultSlot
      :id="name ?? id"
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
          nv?.formGroupBottomWrapper,
        ]"
      >
        <slot name="message">
          <div
            v-if="message"
            form-group="message-wrapper"
            :class="nv?.formGroupMessageWrapper"
          >
            <p
              form-group="message-base"
              :class="[
                nv?.formGroupMessageBase,
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
            :class="nv?.formGroupCounterWrapper"
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
