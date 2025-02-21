<script lang="ts" setup>
import type { ToasterProps } from 'vue-sonner'
import { useColorMode } from '#imports'
import { Toaster as Sonner } from 'vue-sonner'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<ToasterProps>(), {
  expand: true,
})

const colorMode = useColorMode()
</script>

<template>
  <Sonner
    class="sonner group pointer-events-auto"
    v-bind="props"
    :rich-colors="true"
    :theme="theme ?? colorMode.preference === 'dark' ? 'dark' : 'light'"
    :toast-options="{
      classes: {
        icon: 'size-4',
        toast: 'group sonner group-[.sonner]:bg-base group-[.sonner]:text-base group-[.sonner]:border-base group-[.sonner]:shadow-lg',
        description: 'group-[.sonner]:text-muted!',
        actionButton: 'group-[.sonner]:bg-base! group-[.sonner]:text-base!',
        cancelButton: 'group-[.sonner]:bg-muted! group-[.sonner]:text-muted!',
        error: 'group-[.sonner]:text-error!',
        success: 'group-[.sonner]:text-success!',
        warning: 'group-[.sonner]:text-warning!',
        info: 'group-[.sonner]:text-info!',
      },
    }"
  >
    <template #loading-icon>
      <Icon name="i-loading" class="animate-spin" />
    </template>
    <template #success-icon>
      <Icon name="i-success" />
    </template>
    <template #error-icon>
      <Icon name="i-error" />
    </template>
    <template #info-icon>
      <Icon name="i-info" />
    </template>
    <template #warning-icon>
      <Icon name="i-warning" />
    </template>
  </Sonner>
</template>
