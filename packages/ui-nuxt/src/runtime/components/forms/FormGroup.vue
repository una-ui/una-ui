<script setup lang="ts">
import type { FormGroupProps } from '../../types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<FormGroupProps>(), {
  required: false,
})
</script>

<template>
  <div
    form-group="wrapper"
    :class="[
      nv?.wrapper ?? undefined,
    ]"
  >
    <div
      form-group="top-wrapper"
      :class="nv?.topWrapper ?? undefined"
    >
      <div
        form-group="top-wrapper-inner"
        :class="nv?.topWrapperInner ?? undefined"
      >
        <slot name="label">
          <label
            v-if="label"
            form-group="label-base"
            class="form-group-label-wrapper"
            :class="[nv?.labelWrapper ?? undefined]"
            :for="name ? name : label.toLowerCase()"
          >
            <span
              :class="nv?.labelBase ?? undefined"
            >
              {{ label }}
            </span>
            <span
              v-if="required"
              form-group="label-required"
              :class="nv?.labelRequired ?? undefined"
            />
          </label>
        </slot>

        <slot name="hint">
          <span
            v-if="hint" form-group="hint-base"
            :class="nv?.hintBase ?? undefined"
          >
            {{ hint }}
          </span>
        </slot>
      </div>

      <slot name="description">
        <span
          v-if="description"
          form-group="description-wrapper"
          :class="nv?.descriptionWrapper ?? undefined"
        >
          {{ description }}
        </span>
      </slot>
    </div>

    <slot />

    <div
      form-group="bottom-wrapper"
      :class="[
        nv?.bottomWrapper ?? undefined,
      ]"
    >
      <div
        form-group="message-wrapper"
        :class="[
          nv?.messageWrapper ?? undefined,
        ]"
      >
        <slot name="message">
          <!-- TODO add transition when value CHANGE (ease-in-out) -->
          <span
            v-if="message" form-group="message-base"
            :class="[
              nv?.messageBase ?? undefined,
              status ? `text-${status}` : '',
            ]"
          >
            {{ message }}
          </span>
        </slot>
      </div>

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
