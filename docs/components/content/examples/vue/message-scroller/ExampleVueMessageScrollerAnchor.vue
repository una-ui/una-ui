<script setup lang="ts">
interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const messages = ref<Message[]>([
  { id: 'm1', role: 'user', text: 'First question of the thread.' },
  { id: 'm2', role: 'assistant', text: 'And the answer to it, which is long enough to take up a bit of room in the transcript so there is something to scroll past.' },
  { id: 'm3', role: 'user', text: 'A follow-up question.' },
  { id: 'm4', role: 'assistant', text: 'Another answer. Each user turn is marked as a scroll anchor, so a new turn is moved to the top of the viewport with a peek of the previous exchange left above it.' },
])

let uid = 4

function askAgain() {
  uid += 1
  messages.value.push({ id: `m${uid}`, role: 'user', text: `Question ${Math.ceil(uid / 2)} — watch this one move to the top.` })
  uid += 1
  messages.value.push({ id: `m${uid}`, role: 'assistant', text: 'The reply lands underneath the anchored question, so the turn reads from its beginning instead of appearing halfway up the viewport.' })
}
</script>

<template>
  <div class="w-full flex flex-col gap-3">
    <NButton btn="outline-gray" size="sm" label="Ask a new question" class="self-start" @click="askAgain" />

    <div class="h-80 border rounded-lg bg-background">
      <NMessageScrollerProvider auto-scroll default-scroll-position="last-anchor">
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

          <NMessageScrollerButton />
        </NMessageScroller>
      </NMessageScrollerProvider>
    </div>
  </div>
</template>
