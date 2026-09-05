<script setup lang="ts">
const messages = Array.from({ length: 5 }, (_, turn) => [
  {
    id: `q${turn + 1}`,
    role: 'user' as const,
    text: `Question ${turn + 1} — the anchor for this turn.`,
  },
  {
    id: `a${turn + 1}`,
    role: 'assistant' as const,
    text: `Answer ${turn + 1}. Long enough that the turns do not all fit at once, so jumping between them actually moves the viewport and the visibility state changes as you go.`,
  },
]).flat()

const targets = Array.from({ length: 5 }, (_, turn) => ({
  id: `q${turn + 1}`,
  label: `Turn ${turn + 1}`,
}))
</script>

<template>
  <NMessageScrollerProvider default-scroll-position="start">
    <div class="w-full flex flex-col gap-3">
      <div class="h-80 border rounded-lg bg-background">
        <NMessageScroller>
          <NMessageScrollerViewport>
            <NMessageScrollerContent class="p-4">
              <NMessageScrollerItem
                v-for="message in messages"
                :key="message.id"
                :message-id="message.id"
                :scroll-anchor="message.role === 'user'"
              >
                <div
                  class="max-w-[80%] rounded-lg px-3 py-2 text-sm"
                  :class="message.role === 'user'
                    ? 'ml-auto bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'"
                >
                  {{ message.text }}
                </div>
              </NMessageScrollerItem>
            </NMessageScrollerContent>
          </NMessageScrollerViewport>

          <NMessageScrollerButton direction="start" />
          <NMessageScrollerButton />
        </NMessageScroller>
      </div>

      <ExampleVueMessageScrollerJumpControls :targets="targets" />
    </div>
  </NMessageScrollerProvider>
</template>
