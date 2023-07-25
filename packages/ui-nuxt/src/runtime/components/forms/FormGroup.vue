<script setup lang="ts">
import { computed } from 'vue'
import type { NFormGroupProps } from '../../types'
import FormGroupDefaultSlot from '../slots/FormGroupDefault'
import { randomId } from '../../utils'

const props = withDefaults(defineProps<NFormGroupProps>(), {
  required: false,
})

const id = randomId('form-group')

const statusVariants = computed(() => {
  const textClass = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    default: 'text-$c-gray-500',
  }

  return textClass[props.status ?? 'default']
})
</script>

<template>
  <div
    form-group
  >
    <div
      v-if="label || hint || description"
      form-group="top-wrapper"
      :class="nv?.formGroupTopWrapper ?? undefined"
    >
      <div
        v-if="label || hint"
        form-group="top-wrapper-inner"
        :class="nv?.formGroupTopWrapperInner ?? undefined"
      >
        <slot name="label">
          <label
            v-if="label"
            :for="name ?? id"
            form-group="label-wrapper"
            :class="[nv?.formGroupLabelWrapper ?? undefined]"
          >
            <span
              form-group="label-base"
              :class="nv?.formGroupLabelBase ?? undefined"
            >
              {{ label }}
            </span>
            <span
              v-if="required"
              form-group="label-required"
              :class="nv?.formGroupLabelRequired ?? undefined"
            />
          </label>
        </slot>

        <slot name="hint">
          <span
            v-if="hint" form-group="hint-base"
            :class="nv?.formGroupHintBase ?? undefined"
          >
            {{ hint }}
          </span>
        </slot>
      </div>

      <slot name="description">
        <span
          v-if="description"
          form-group="description-base"
          :class="nv?.formGroupDescriptionBase ?? undefined"
        >
          {{ description }}
        </span>
      </slot>
    </div>

    <FormGroupDefaultSlot
      :id="name ?? id"
      :status="status"
    >
      <slot />
    </FormGroupDefaultSlot>

    <div
      v-if="message || (counter?.value || counter?.persistent)"
      form-group="bottom-wrapper"
      :class="[
        nv?.formGroupBottomWrapper ?? undefined,
      ]"
    >
      <slot name="message">
        <div
          form-group="message-wrapper"
          :class="[
            nv?.formGroupMessageWrapper ?? undefined,
          ]"
        >
          <!-- TODO add transition when value CHANGE (ease-in-out) -->
          <p
            v-if="message" form-group="message-base"
            :class="[
              nv?.formGroupMessageBase ?? undefined,
              statusVariants,
            ]"
          >
            {{ message }}
          </p>
        </div>
      </slot>

      <slot name="counter">
        <div
          v-if="counter?.value || counter?.persistent"
          form-group="counter-wrapper"
          :class="[
            nv?.formGroupCounterWrapper ?? undefined,
          ]"
        >
          <span
            :class="`${counter?.value >= (counter?.max || 0) && counter?.max
              ? 'form-group-counter-error'
              : 'form-group-counter-current'}`"
          >
            {{ counter.value }}
          </span>
          <span v-if="counter?.max" form-group="counter-separator">/</span>
          <span v-if="counter?.max" form-group="counter-max">{{ counter?.max }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>
