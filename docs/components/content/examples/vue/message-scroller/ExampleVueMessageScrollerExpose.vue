<script setup lang="ts">
// This composer is rendered by the same component that renders the provider, so
// it sits outside the context and cannot call useMessageScroller(). It drives
// the transcript through a template ref on NMessageScroller instead.
const scroller = useTemplateRef('scroller')

const messages = ref([
  { id: 'm1', role: 'user', text: 'Can a composer outside the provider still scroll the transcript?' },
  { id: 'm2', role: 'assistant', text: 'Yes — through a template ref. The provider puts the context below itself, so anything rendered as a sibling of the transcript has nothing to inject, and this composer is rendered by the same component that renders the provider.' },
  { id: 'm3', role: 'user', text: 'What does the ref give me?' },
  { id: 'm4', role: 'assistant', text: 'The same three commands useMessageScroller() returns — scrollToEnd, scrollToStart and scrollToMessage. NMessageScroller exposes them on its instance, so the context is not the only way in.' },
  { id: 'm5', role: 'user', text: 'And the send button?' },
  { id: 'm6', role: 'assistant', text: 'Append the message, await nextTick() so the new item is in the DOM, then call scrollToEnd. Without the tick you would scroll to where the end used to be.' },
  { id: 'm7', role: 'user', text: 'Does Top work the same way?' },
  { id: 'm8', role: 'assistant', text: 'It calls scrollToStart off the same ref. Send a few messages, then jump back up here to see both ends of the transcript move.' },
])

const draft = ref('')

async function send() {
  const text = draft.value.trim()
  if (!text)
    return

  messages.value.push({ id: `m${messages.value.length + 1}`, role: 'user', text })
  draft.value = ''

  // The append has to be in the DOM before the new end can be scrolled to.
  await nextTick()
  scroller.value?.scrollToEnd({ behavior: 'smooth' })
}
</script>

<template>
  <div class="w-full flex flex-col gap-3">
    <div class="h-80 border rounded-lg bg-background">
      <NMessageScrollerProvider>
        <NMessageScroller ref="scroller">
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

    <div class="flex items-center gap-2">
      <NInput
        v-model="draft"
        placeholder="Write a message, then send"
        :una="{ inputWrapper: 'flex-1' }"
        @keydown.enter="send"
      />
      <NButton
        btn="outline-gray"
        size="sm"
        label="Send"
        @click="send"
      />
      <NButton
        btn="outline-gray"
        size="sm"
        label="Top"
        @click="scroller?.scrollToStart({ behavior: 'smooth' })"
      />
    </div>
  </div>
</template>
