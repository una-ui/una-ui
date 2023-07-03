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

  // classes
  nv?: {
    wrapper?: string
    topWrapper?: string
    label?: {
      wrapper?: string
      base?: string
      required?: string
    }
  }
}

withDefaults(defineProps<Props>(), {
  required: false,
  counterValue: 0,
  counterMax: 0,
})
</script>

<template>
  <div input="wrapper" :class="nv?.wrapper ?? undefined">
    <!-- top -->
    <div
      input="top-wrapper"
      :class="nv?.topWrapper ?? undefined"
    >
      <!-- label area -->
      <slot name="label">
        <label
          input="label-base"
          :for="name ? name : label.toLowerCase()"
        >
          {{ label }} <span v-if="required" input="label-required" :class="nv?.label?.required ?? undefined" />
        </label>
      </slot>

      <!-- hint area -->
      <slot name="hint">
        <span input="hint-wrapper">{{ hint }}</span>
      </slot>
    </div>

    <!-- default area -->
    <slot />

    <!-- bottom area -->
    <div input="bottom-wrapper">
      <!-- messages -->
      <div>
        <!-- error message -->
        <slot name="error">
          <p v-if="error" input="error-message">
            {{ error }}
          </p>
        </slot>

        <!-- help message -->
        <slot name="help">
          <p v-if="!error && help" input="help-message">
            {{ help }}
          </p>
        </slot>
      </div>

      <div>
        <!-- counter -->
        <slot name="counter">
          <span
            v-if="counterCurrent"
            input="counter-wrapper"
          >
            <span :class="`${counterCurrent >= counterMax ? 'input-counter-error' : 'input-counter-current'}`">{{ counterCurrent }}</span>
            <span v-if="counterMax" input="counter-separator">/</span>
            <span v-if="counterMax" input="counter-max">{{ counterMax }}</span>
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>
