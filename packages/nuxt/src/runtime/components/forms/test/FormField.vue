<script setup lang="ts">
import type { NFormFieldProps } from '../../../types'
import { Field } from 'vee-validate'
import { computed } from 'vue'
import { cn } from '../../../utils'
import FormFieldDefaultSlot from '../../slots/FormFieldDefault'
import FormControl from './FormControl.vue'
import FormDescription from './FormDescription.vue'
import FormItem from './FormItem.vue'
import FormLabel from './FormLabel.vue'
import FormMessage from './FormMessage.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NFormFieldProps>()

const statusClassVariants = computed(() => {
  const text = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    default: 'text-muted',
  }

  return text[props.status ?? 'default']
})
</script>

<template>
  <Field
    v-slot="{ componentField, errorMessage }"
    :name
  >
    <FormItem
      :class="cn(
        props.class,
      )"
    >
      <slot name="top">
        <div
          :class="cn(
            'form-field-top-wrapper',
            una?.formFieldTopWrapper,
          )"
        >
          <div
            v-if="label || hint || description"
            :class="cn(
              'form-field-top-wrapper',
              una?.formFieldTopWrapper,
            )"
          >
            <div
              v-if="label || hint"
              :class="cn(
                'form-field-top-wrapper-inner',
                una?.formFieldTopWrapperInner,
              )"
            >
              <div
                :class="cn(
                  'form-field-label-wrapper',
                  una?.formFieldLabelWrapper,
                )"
              >
                <slot name="label">
                  <FormLabel
                    :una
                  >
                    <span>
                      {{ label }}
                    </span>

                    <span
                      v-if="required"
                      :class="cn(
                        'form-field-label-required',
                        una?.formFieldLabelRequired,
                      )"
                    />
                  </FormLabel>
                </slot>
              </div>

              <slot name="hint">
                <span
                  v-if="hint"
                  :class="cn(
                    'form-field-hint',
                    una?.formFieldHint,
                  )"
                >
                  {{ hint }}
                </span>
              </slot>
            </div>

            <slot name="description">
              <FormDescription
                v-if="description"
                :una
              >
                {{ description }}
              </FormDescription>
            </slot>
          </div>
        </div>
      </slot>

      <FormControl>
        <FormFieldDefaultSlot
          :status="!errorMessage ? status : 'error'"
          v-bind="componentField"
        >
          <slot />
        </FormFieldDefaultSlot>
      </FormControl>

      <slot name="bottom">
        <div
          :class="cn(
            'form-field-bottom-wrapper',
            una?.formFieldBottomWrapper,
          )"
        >
          <slot name="message">
            <div
              v-if="message && !errorMessage"
              :class="cn(
                'form-field-message-wrapper',
                una?.formFieldMessageWrapper,
              )"
            >
              <FormDescription
                :class="cn(
                  'form-field-message',
                  una?.formMessage,
                  statusClassVariants,
                )"
              >
                {{ message }}
              </FormDescription>
            </div>

            <FormMessage
              v-else
            />
          </slot>
        </div>
      </slot>
    </FormItem>
  </Field>
</template>
