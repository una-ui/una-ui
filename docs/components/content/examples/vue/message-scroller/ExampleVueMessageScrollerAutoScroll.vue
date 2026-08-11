<script setup lang="ts">
interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const REPLY = 'While a reply streams, the viewport stays pinned to the live edge. Scroll up and it lets go — new chunks arrive without moving you. Come back to the bottom and it picks the thread up again.'

const messages = ref<Message[]>([
  { id: 'm1', role: 'user', text: 'Stream me something long enough to scroll.' },
  { id: 'm2', role: 'assistant', text: REPLY },
])

const streaming = ref(false)
let timer: ReturnType<typeof setInterval> | null = null
let uid = 2

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  streaming.value = false
}

function stream() {
  if (streaming.value)
    return
  uid += 1
  messages.value.push({ id: `m${uid}`, role: 'user', text: 'Once more, please.' })
  uid += 1
  messages.value.push({ id: `m${uid}`, role: 'assistant', text: '' })
  // mutate through the array proxy so every chunk triggers reactivity
  const reply = messages.value[messages.value.length - 1]!
  streaming.value = true

  const words = `${REPLY} ${REPLY}`.split(' ')
  let index = 0
  timer = setInterval(() => {
    if (index >= words.length) {
      stop()
      return
    }
    reply.text += `${words[index]} `
    index += 1
  }, 70)
}

onBeforeUnmount(stop)
</script>

<template>
  <div class="w-full flex flex-col gap-3">
    <NButton
      btn="outline-gray"
      size="sm"
      label="Stream a reply"
      class="self-start"
      :disabled="streaming"
      @click="stream"
    />

    <div class="h-80 border rounded-lg bg-background">
      <NMessageScrollerProvider auto-scroll>
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
  </div>
</template>
