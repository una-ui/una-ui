<script setup lang="ts">
const messages = [
  { id: 'm1', role: 'user', text: 'What does a message scroller actually have to do?' },
  { id: 'm2', role: 'assistant', text: 'Keep the reader where they expect to be. That means following a reply while it streams, but never fighting someone who scrolls up to re-read something.' },
  { id: 'm3', role: 'user', text: 'And when older history loads above?' },
  { id: 'm4', role: 'assistant', text: 'The reading position is preserved — the message you were looking at stays exactly where it was, instead of being pushed down the page.' },
  { id: 'm5', role: 'user', text: 'What about jumping around the thread?' },
  { id: 'm6', role: 'assistant', text: 'Every item can carry a messageId, so you can scroll to any of them on demand, with the alignment you want.' },
]
</script>

<template>
  <div class="h-80 w-full border rounded-lg bg-background">
    <NMessageScrollerProvider>
      <NMessageScroller>
        <NMessageScrollerViewport>
          <NMessageScrollerContent class="p-4">
            <NMessageScrollerItem
              v-for="message in messages"
              :key="message.id"
              :message-id="message.id"
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

        <NMessageScrollerButton />
      </NMessageScroller>
    </NMessageScrollerProvider>
  </div>
</template>
