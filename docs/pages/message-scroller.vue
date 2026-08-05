<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

interface DemoMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const LOREM = 'Watching the frontier advance one ticket at a time. The scroll engine keeps the reader anchored while replies stream in below, and hands control back the moment you scroll.'

let uid = 0
function makeMessage(role: DemoMessage['role'], text: string): DemoMessage {
  uid += 1
  return { id: `m-${uid}`, role, text }
}

const messages = ref<DemoMessage[]>(
  Array.from({ length: 12 }, (_, i) =>
    makeMessage(i % 2 === 0 ? 'user' : 'assistant', `${i + 1}. ${LOREM}`)),
)

const autoScroll = ref(true)
const buttonBtn = ref<string | undefined>(undefined)
const streaming = ref(false)
let streamTimer: ReturnType<typeof setInterval> | null = null

function stopStream() {
  if (streamTimer) {
    clearInterval(streamTimer)
    streamTimer = null
  }
  streaming.value = false
}

function streamReply() {
  if (streaming.value)
    return
  messages.value.push(makeMessage('user', 'Stream a long reply, please.'))
  messages.value.push(makeMessage('assistant', ''))
  const reply = messages.value[messages.value.length - 1]!
  streaming.value = true
  const words = `${LOREM} ${LOREM} ${LOREM} ${LOREM}`.split(' ')
  let index = 0
  streamTimer = setInterval(() => {
    if (index >= words.length) {
      stopStream()
      return
    }
    reply.text += `${words[index]} `
    index += 1
  }, 60)
}

function appendOne() {
  messages.value.push(makeMessage('assistant', `Appended at ${new Date().toLocaleTimeString()}. ${LOREM}`))
}

function prependOlder() {
  const older = Array.from({ length: 5 }, (_, i) =>
    makeMessage('assistant', `Older history ${uid + i + 1}. ${LOREM}`))
  messages.value.unshift(...older)
}

function newAnchoredTurn() {
  messages.value.push(makeMessage('user', 'A fresh question that should anchor to the top.'))
  messages.value.push(makeMessage('assistant', `${LOREM} ${LOREM}`))
}

onBeforeUnmount(stopStream)
</script>

<template>
  <div class="mx-auto h-screen max-w-3xl flex flex-col gap-4 p-6">
    <div class="flex flex-wrap items-center gap-2">
      <NButton btn="soft" size="sm" label="Stream reply" :disabled="streaming" @click="streamReply" />
      <NButton btn="soft" size="sm" label="Append" @click="appendOne" />
      <NButton btn="soft" size="sm" label="Prepend older" @click="prependOlder" />
      <NButton btn="soft" size="sm" label="Anchored turn" @click="newAnchoredTurn" />
      <label class="ml-auto flex items-center gap-2 text-sm">
        <NSwitch v-model="autoScroll" />
        autoScroll
      </label>
      <select v-model="buttonBtn" class="border rounded-md bg-background px-2 py-1 text-sm">
        <option :value="undefined">
          btn: default
        </option>
        <option value="soft">
          btn: soft
        </option>
        <option value="solid">
          btn: solid
        </option>
        <option value="outline-gray">
          btn: outline-gray
        </option>
      </select>
    </div>

    <div class="min-h-0 flex-1 border rounded-lg bg-background">
      <NMessageScrollerProvider :auto-scroll="autoScroll" default-scroll-position="end">
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
          <NMessageScrollerButton :btn="buttonBtn" />
        </NMessageScroller>
      </NMessageScrollerProvider>
    </div>

    <div class="flex gap-4 text-xs text-muted-foreground">
      <span>scroll-fade-b + scrollbar-thin on viewport</span>
      <span>user turns are scroll anchors</span>
    </div>
  </div>
</template>
