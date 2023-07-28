<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

import { ref } from 'vue'
import type { NAccordionProps } from '../../types'
import NIcon from './Icon.vue'
import NButton from './Button.vue'

const { multiple, items } = withDefaults(defineProps<NAccordionProps>(), {
  openIcon: 'i-heroicons-chevron-down',
  multiple: false,
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

const buttonRefs = ref<(() => void)[]>([])

function closeOthers(index: number) {
  if (multiple && !items[index].closeOthers)
    return

  buttonRefs.value
    .filter((_, i) => i !== index)
    .forEach(close => close())
}
</script>

<template>
  <div
    :accordion="`~ ${accordion ?? ''}`"
  >
    <Disclosure
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open, close }"
      as="div"
      accordion="item"
      :default-open="item.defaultOpen ?? false"
      :class="nv?.accordionItem ?? undefined"
    >
      <DisclosureButton
        :ref="() => (buttonRefs[i] = close)"
        as="template"
        @click="closeOthers(i)"
      >
        <NButton
          accordion="button"
          btn="base block"
          :class="nv?.accordionButton ?? undefined"
        >
          <span class="items-center" flex>
            <NIcon
              v-if="item.icon"
              accordion="button-leading"
              :name="item.icon"
              aria-hidden="true"
            />

            {{ item.label }}
          </span>

          <template #trailing>
            <span
              v-if="openIcon || closeIcon"
              accordion="button-trailing"
              :class="!closeIcon && open ? 'rotate-180' : undefined"
            >
              <NIcon
                v-if="!open || !closeIcon"
                :name="openIcon"
                aria-hidden="true"
              />
              <NIcon
                v-else-if="open && closeIcon"
                :name="closeIcon"
                aria-hidden="true"
              />
            </span>
          </template>
        </NButton>
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
