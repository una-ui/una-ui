<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import type { NAccordionProps } from '../../types'
import NIcon from './Icon.vue'

withDefaults(defineProps<NAccordionProps>(), {
  openIcon: 'i-heroicons-chevron-down',
  closeIcon: 'i-heroicons-chevron-up',
})

function onEnter(element: Element, done: () => void) {
  const el = element as HTMLElement
  el.style.height = '0'
  el.offsetHeight // eslint-disable-line no-unused-expressions
  el.style.height = `${element.scrollHeight}px`
  el.addEventListener('transitionend', done, { once: true })
}

function onAfterEnter(element: Element) {
  const el = element as HTMLElement
  el.style.height = 'auto'
}

function onBeforeLeave(element: Element) {
  const el = element as HTMLElement
  el.style.height = `${el.scrollHeight}px`
  el.offsetHeight // eslint-disable-line no-unused-expressions
}

function onLeave(element: Element, done: () => void) {
  const el = element as HTMLElement
  el.style.height = '0'

  el.addEventListener('transitionend', done, { once: true })
}
</script>

<template>
  <div
    :accordion="`~ ${accordion ?? undefined}`"
  >
    <Disclosure
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open }"
      as="div"
      accordion="item"
      :default-open="item.defaultOpen ?? false"
      :class="nv?.accordionItem ?? undefined"
    >
      <DisclosureButton
        as="button"
        accordion="button"
        :class="[
          nv?.accordionButton ?? undefined,
        ]"
      >
        <span class="flex items-center">
          <NIcon
            v-if="item.icon"
            mr-2
            :name="item.icon"
            aria-hidden="true"
          />
          {{ item.label }}
        </span>
        <span
          v-if="openIcon || closeIcon"
          class="flex items-center text-.8em"
        >
          <NIcon
            v-if="!open"
            :name="openIcon"
            aria-hidden="true"
          />
          <NIcon
            v-else-if="open && closeIcon"
            :name="closeIcon"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>

      <Transition
        enter-active-class="accordion-enter-active"
        leave-active-class="accordion-leave-active"
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
