<script setup lang="ts">
interface Props {
  label: string
  hint?: string
  name?: string
  required?: boolean
  error?: string
  counterCurrent?: number
  counterMax?: number
  help?: string
  description?: string

  // classes
  nv?: {
    wrapper?: string
    topWrapper?: string
    labelWrapper?: string
    topWrapperInner?: string
    labelBase?: string
    labelRequired?: string
    descriptionWrapper?: string
  }
}

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<Props>(), {
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
        <!-- label area -->
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

        <!-- hint area -->
        <slot name="hint">
          <p v-if="hint" form-group="hint-wrapper">
            {{ hint }}
          </p>
        </slot>
      </div>

      <slot name="description">
        <p
          v-if="description"
          form-group="description-wrapper"
          :class="nv?.descriptionWrapper ?? undefined"
        >
          {{ description }}
        </p>
      </slot>
    </div>
    <slot />

    <div form-group="bottom-wrapper">
      <div>
        <slot name="error">
          <p v-if="error" form-group="error-message">
            <!-- TODO ADD Transition -->
            {{ error }}
          </p>
        </slot>

        <slot name="help">
          <!-- TODO ADD Transition -->
          <p v-if="!error && help" form-group="help-message">
            {{ help }}
          </p>
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
