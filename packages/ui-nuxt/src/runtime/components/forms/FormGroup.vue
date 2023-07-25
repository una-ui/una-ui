<script setup lang="ts">
import type { NFormGroupProps } from '../../types'
import FormGroupDefaultSlot from '../slots/FormGroupDefault'
import { randomId } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<NFormGroupProps>(), {
  required: false,
})

const id = randomId('form-group')
</script>

<template>
  <div
    form-group="wrapper"
    :class="[
      nv?.formGroupWrapper ?? undefined,
    ]"
  >
    <div
      form-group="top-wrapper"
      :class="nv?.formGroupTopWrapper ?? undefined"
    >
      <div
        form-group="top-wrapper-inner"
        :class="nv?.formGroupTopWrapperInner ?? undefined"
      >
        <slot name="label">
          <label
            v-if="label"
            :for="name ?? id"
            form-group="label-base"
            class="form-group-label-wrapper"
            :class="[nv?.formGroupLabelWrapper ?? undefined]"
          >
            <span
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
          form-group="description-wrapper"
          :class="nv?.formGroupDescriptionWrapper ?? undefined"
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
              status ? `text-${status}` : '',
            ]"
          >
            {{ message }}
          </p>
        </div>
      </slot>

      <div
        v-if="counterCurrent"
        form-group="counter-wrapper"
      >
        <slot name="counter">
          <span
            :class="`${counterCurrent >= (counterMax || 0) && counterMax
              ? 'form-group-counter-error'
              : 'form-group-counter-current'}`"
          >{{ counterCurrent }}</span>
          <span v-if="counterMax" form-group="counter-separator">/</span>
          <span v-if="counterMax" form-group="counter-max">{{ counterMax }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>
