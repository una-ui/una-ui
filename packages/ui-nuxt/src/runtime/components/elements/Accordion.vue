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

const props = withDefaults(defineProps<NAccordionProps>(), {
  trailingOpen: 'i-heroicons-chevron-up',
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
  if (props.multiple && !props.items[index].closeOthers)
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
    :class="variantMode ? 'space-y-3' : 'accordion-(border divider)'"
  >
    <Disclosure
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open, close }"
      as="div"
      accordion="item"
      :default-open="(item.defaultOpen !== false && defaultOpen || item.defaultOpen) ?? false"
      :class="nv?.accordionItem ?? undefined"
    >
      <DisclosureButton
        :ref="() => (buttonRefs[i] = close)"
        as="template"
        :disabled="item.disabled"
        @click="closeOthers(i)"
      >
        <slot name="label" :item="item" :index="i" :open="open" :close="close">
          <NButton
            accordion="button"
            :class="[
              nv?.accordionButton ?? undefined,
            ]"
            :reverse="(reverse && item.reverse !== false) || item.reverse"
            loading-placement="trailing"
            v-bind="omitProps(item, ['content', 'defaultOpen', 'closeOthers', 'trailing', 'leading', 'btn', 'label'])"
            btn="base block"
            :label="item.label"
            :nv="{
              btnLabelBase: 'accordion-label',
            }"
          >
            <template #leading>
              <NIcon
                v-if="leading || item.leading"
                accordion="button-leading"
                :class="[
                  nv?.accordionButtonLeading ?? undefined,
                ]"
                :name="item.leading ? item.leading : leading ?? ''"
                aria-hidden="true"
              />
            </template>

            <!-- TODO convert to trailing prop -->
            <template #trailing>
              <span
                v-if="trailingOpen || trailingClose"
                accordion="button-trailing"
                :class="trailingClose || !trailingClose && open
                  ? nv?.accordionTrailingClose ?? 'accordion-trailing-close'
                  : nv?.accordionTrailingOpen ?? 'accordion-trailing-open'"
              >
                <NIcon
                  v-if="(open || !trailingClose) && trailingOpen"
                  :name="trailingOpen"
                  aria-hidden="true"
                />
                <NIcon
                  v-else-if="!open && trailingClose"
                  :name="trailingClose"
                  aria-hidden="true"
                />
              </span>
            </template>
          </NButton>
        </slot>
      </DisclosureButton>

      <Transition
        :enter-active-class="nv?.accordionEnterActive ?? 'accordion-enter-active'"
        :leave-active-class="nv?.accordionLeaveActive ?? 'accordion-leave-active'"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="open">
          <DisclosurePanel
            static
          >
            <slot name="content" :item="item" :index="i" :open="open" :close="close">
              <div
                accordion="panel"
                :class="[
                  nv?.accordionPanel ?? undefined,
                  { 'border-0': variantMode },
                ]"
              >
                {{ item.content }}
              </div>
            </slot>
          </DisclosurePanel>
        </div>
      </Transition>
    </Disclosure>
  </div>
</template>
