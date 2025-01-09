<script lang="ts" setup>
import type { NFormDescriptionProps } from '../../../types'
import { useFormField } from '../../../composables/useFormField'
import { cn } from '../../../utils'

const props = defineProps<NFormDescriptionProps>()

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    :class="cn(
      'form-description',
      props.una?.formDescription,
      props.class,
    )"
  >
    <slot />
  </p>
</template>
