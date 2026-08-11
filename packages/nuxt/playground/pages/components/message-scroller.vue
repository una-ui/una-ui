<script setup lang="ts">
interface DemoMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const LOREM = 'The scroll engine keeps the reader anchored while replies stream in below, and hands control back the moment you scroll away.'

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
const buttonVariant = ref<string | undefined>(undefined)
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
  // mutate through the array proxy so each append triggers reactivity
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
  messages.value.push(makeMessage('assistant', `Appended message. ${LOREM}`))
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

const rows = Array.from({ length: 24 }, (_, i) => `Row ${i + 1}`)
</script>

<template>
  <div class="flex flex-col gap-8 p-6">
    <section class="flex flex-col gap-3">
      <h2 class="text-sm text-muted-foreground font-medium">
        Chat scroller — anchoring, streaming, prepend
      </h2>

      <div class="flex flex-wrap items-center gap-2">
        <NButton btn="soft" size="sm" label="Stream reply" :disabled="streaming" @click="streamReply" />
        <NButton btn="soft" size="sm" label="Append" @click="appendOne" />
        <NButton btn="soft" size="sm" label="Prepend older" @click="prependOlder" />
        <NButton btn="soft" size="sm" label="Anchored turn" @click="newAnchoredTurn" />

        <label class="ml-auto flex items-center gap-2 text-sm">
          <NSwitch v-model="autoScroll" />
          autoScroll
        </label>

        <select v-model="buttonVariant" class="border rounded-md bg-background px-2 py-1 text-sm">
          <option :value="undefined">
            btn: default (outline-white)
          </option>
          <option value="solid">
            btn: solid
          </option>
          <option value="solid-gray">
            btn: solid-gray
          </option>
          <option value="outline-gray">
            btn: outline-gray
          </option>
        </select>
      </div>

      <div class="h-120 border rounded-lg bg-background">
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

            <NMessageScrollerButton direction="start" :btn="buttonVariant" />
            <NMessageScrollerButton :btn="buttonVariant" />
          </NMessageScroller>
        </NMessageScrollerProvider>
      </div>

      <p class="text-xs text-muted-foreground">
        User turns are scroll anchors. The viewport carries <code>scroll-fade-b</code>,
        <code>scrollbar-thin</code> and hides the scrollbar while autoscrolling.
      </p>
    </section>

    <section class="flex flex-col gap-3">
      <h2 class="text-sm text-muted-foreground font-medium">
        scroll-fade / scrollbar utilities — usable without the scroller
      </h2>

      <div class="flex flex-wrap gap-4">
        <div class="h-52 w-64 overflow-y-auto border rounded-lg p-4 scrollbar-thin scroll-fade">
          <div v-for="row in rows" :key="row" class="py-1 text-sm">
            {{ row }}
          </div>
        </div>

        <div class="h-52 w-64 overflow-y-auto border rounded-lg p-4 no-scrollbar scroll-fade-b scroll-fade-b-16">
          <div v-for="row in rows" :key="row" class="py-1 text-sm">
            {{ row }}
          </div>
        </div>

        <div class="w-96 flex gap-4 overflow-x-auto border rounded-lg p-4 no-scrollbar scroll-fade-x">
          <div v-for="row in rows" :key="row" class="shrink-0 rounded-md bg-muted px-3 py-2 text-sm">
            {{ row }}
          </div>
        </div>
      </div>

      <p class="text-xs text-muted-foreground">
        Left: both edges fade as you scroll (<code>scroll-fade</code>). Middle: bottom edge only, size
        overridden with <code>scroll-fade-b-16</code>. Right: horizontal (<code>scroll-fade-x</code>).
      </p>
    </section>
  </div>
</template>
