<script setup lang="ts">
import { cn } from '../../../../packages/nuxt/src/runtime/utils'

const props = defineProps({
  gradientSize: { type: Number, default: 150 },
  gradientColor: { type: String, default: 'var(--c-brand-next)' },
  gradientOpacity: { type: Number, default: 0.3 },
  class: { type: String, default: '' },
  slotClass: String,
})

const mouseX = ref(-props.gradientSize * 10)
const mouseY = ref(-props.gradientSize * 10)

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX.value = -props.gradientSize * 10
  mouseY.value = -props.gradientSize * 10
}

onMounted(() => {
  mouseX.value = -props.gradientSize * 10
  mouseY.value = -props.gradientSize * 10
})

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${props.gradientColor} 0%,
    rgba(0, 0, 0, 0) 70%
  )`
})
</script>

<template>
  <NCard
    class="group relative h-full w-full flex overflow-hidden border rounded-xl pt-5 space-y-6" card="soft" :class="[
      $props.class,
    ]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div :class="cn('relative z-10 space-y-2', props.slotClass)">
      <slot />
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: backgroundStyle,
        opacity: gradientOpacity,
      }"
    />
  </NCard>
</template>
