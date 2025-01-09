<script lang="ts" setup>
import type { NFormLabelProps } from '../../../types'
import { useFormField } from '../../../composables/useFormField'
import { cn } from '../../../utils'
import Label from '../../elements/Label.vue'

const props = defineProps<NFormLabelProps>()

const { formItemId } = useFormField()
</script>

<template>
  <Label
    :class="cn(
      'form-label',
      props.una?.formLabel,
      props.class,
    )"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
