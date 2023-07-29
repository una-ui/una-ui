<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

import { ref } from 'vue'
import type { NAccordionProps } from '../../types'
import { omitProps } from '../../utils'
import NIcon from './Icon.vue'
import NButton from './Button.vue'

const { multiple, items } = withDefaults(defineProps<NAccordionProps>(), {
  trailingOpen: 'i-heroicons-chevron-up',
  multiple: false,
})

function onEnter(element: Element, done: () => void) {
  const el = element as HTMLElement
  el.style.height = '0'
  el.offsetHeight // eslint-disable-line no-unused-expressions
  el.style.height = `${element.scrollHeight}px`
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
          :class="nv?.accordionButton ?? undefined"
          loading-placement="trailing"
          v-bind="omitProps(item, ['content', 'open', 'defaultOpen', 'closeOthers', 'trailing', 'leading', 'btn', 'label'])"
          btn="base block"
        >
          <span class="items-center" flex>
            <NIcon
              v-if="leading || item.leading"
              accordion="button-leading"
              :class="[
                nv?.accordionButtonLeading ?? undefined,
              ]"
              :name="item.leading ? item.leading : leading ?? ''"
              aria-hidden="true"
            />
            {{ item.label }}
          </span>

          <template #trailing>
            <span
              v-if="trailingOpen || trailingClose"
              accordion="button-trailing"
              :class="trailingClose || !trailingClose && open
                ? nv?.accordionTrailingClose ?? 'accordion-trailing-close'
                : nv?.accordionTrailingOpen ?? 'accordion-trailing-open'"
            >
              <NIcon
                v-if="(!open || !trailingClose) && trailingOpen"
                :name="trailingOpen"
                aria-hidden="true"
              />
              <NIcon
                v-else-if="open && trailingClose"
                :name="trailingClose"
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
