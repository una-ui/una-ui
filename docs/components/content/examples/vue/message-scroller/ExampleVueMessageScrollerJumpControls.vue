<script setup lang="ts">
// The composables read the scroller's context, so they have to be called from a
// component rendered inside NMessageScrollerProvider — not from the component
// that renders the provider itself.
defineProps<{
  targets: { id: string, label: string }[]
}>()

const { scrollToMessage } = useMessageScroller()
const visibility = useMessageScrollerVisibility()
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <NButton
      v-for="target in targets"
      :key="target.id"
      btn="outline-gray"
      size="sm"
      :label="target.label"
      @click="scrollToMessage(target.id, { align: 'start' })"
    />

    <span class="ml-auto text-xs text-muted-foreground">
      current turn: <code>{{ visibility.currentAnchorId ?? '—' }}</code>
      · visible: <code>{{ visibility.visibleMessageIds.length }}</code>
    </span>
  </div>
</template>
