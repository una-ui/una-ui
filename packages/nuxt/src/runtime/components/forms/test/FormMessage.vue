<script lang="ts" setup>
import type { NFormMessageProps } from '../../../types'
import { ErrorMessage } from 'vee-validate'
import { toValue } from 'vue'
import { useFormField } from '../../../composables/useFormField'
import { cn } from '../../../utils'

const props = defineProps<NFormMessageProps>()

const { name, formMessageId } = useFormField()
</script>

<template>
  <ErrorMessage
    :id="formMessageId"
    as="p"
    :name="toValue(name)"
    :class="cn(
      'form-message',
      props.una?.formMessage,
      props.class,
    )"
  />
</template>
