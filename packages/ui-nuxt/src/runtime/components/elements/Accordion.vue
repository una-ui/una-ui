<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import type { NAccordionProps } from '../../types'
import NIcon from './Icon.vue'

withDefaults(defineProps<NAccordionProps>(), {
})

function onEnter(el: any, done: any) {
  el.style.height = '0'
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
  el.style.height = `${el.scrollHeight}px`

  el.addEventListener('transitionend', done, { once: true })
}

function onBeforeLeave(el: any) {
  el.style.height = `${el.scrollHeight}px`
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
}

function onAfterEnter(el: any) {
  el.style.height = 'auto'
}

function onLeave(el: any, done: any) {
  el.style.height = '0'

  el.addEventListener('transitionend', done, { once: true })
}
</script>

<template>
  <div accordion>
    <Disclosure
      v-for="(item, i) in items" :key="i" v-slot="{ open }"
      as="div"
      accordion="item"
      :class="nv?.accordionItem ?? undefined"
    >
      <DisclosureButton
        as="button"
        accordion="button"
        :class="nv?.accordionButton ?? undefined"
      >
        <span class="flex items-center">
          <NIcon v-if="item.icon" mr-2 :name="item.icon" aria-hidden="true" />
          {{ item.label }}
        </span>
        <span class="flex items-center text-.8em">
          <NIcon v-if="!open" name="i-heroicons-chevron-up" aria-hidden="true" />
          <NIcon v-else name="i-heroicons-chevron-down" aria-hidden="true" />
        </span>
      </DisclosureButton>

      <Transition
        enter-active-class="overflow-hidden transition-[height] duration-300 ease-out"
        leave-active-class="overflow-hidden transition-[height] duration-300 ease-out"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="open">
          <DisclosurePanel
            static
            accordion="panel"
            :class="nv?.accordionPanel ?? undefined"
          >
            {{ item.content }}
          </DisclosurePanel>
        </div>
      </Transition>
    </Disclosure>
  </div>
</template>
