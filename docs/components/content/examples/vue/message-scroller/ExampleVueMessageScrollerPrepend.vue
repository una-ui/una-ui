<script setup lang="ts">
interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
}

let oldest = 0

function olderPage(): Message[] {
  return Array.from({ length: 4 }, (_, i) => {
    oldest -= 1
    return {
      id: `old${oldest}`,
      role: (i % 2 === 0 ? 'user' : 'assistant') as Message['role'],
      text: `Older message ${oldest}. Loading history above the reader must not move the message they are reading.`,
    }
  }).reverse()
}

const messages = ref<Message[]>([
  { id: 'm1', role: 'user', text: 'Scroll to the top and load the history above.' },
  { id: 'm2', role: 'assistant', text: 'The scroller records where the first visible message sits, then puts it back after the prepend — so the transcript grows upward without the page jumping under you.' },
  { id: 'm3', role: 'user', text: 'Try it a few times in a row.' },
  { id: 'm4', role: 'assistant', text: 'Each page of history is added above, and your reading position stays put to the pixel.' },
])

function loadOlder() {
  messages.value.unshift(...olderPage())
}
</script>

<template>
  <div class="w-full flex flex-col gap-3">
    <NButton btn="outline-gray" size="sm" label="Load older messages" class="self-start" @click="loadOlder" />

    <div class="h-80 border rounded-lg bg-background">
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

          <NMessageScrollerButton direction="start" />
          <NMessageScrollerButton />
        </NMessageScroller>
      </NMessageScrollerProvider>
    </div>
  </div>
</template>
