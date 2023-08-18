<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { createReusableTemplate } from '@vueuse/core'
import { computed, ref } from 'vue'

import type { NAccordionItemProps, NAccordionProps } from '../../types'
import { pickProps } from '../../utils'
import NIcon from './Icon.vue'
import NButton from './Button.vue'

const props = withDefaults(defineProps<NAccordionProps>(), {
  trailingOpen: 'accordion-trailing-icon',
  loadingPlacement: 'trailing',
})

const buttonRefs = ref<(() => void)[]>([])

function closeOthers(index: number) {
  if (props.multiple && !props.items[index].closeOthers)
    return

  buttonRefs.value
    .filter((_, i) => i !== index)
    .forEach(close => close())
}

function onEnter(element: Element, done: () => void) {
  const el = element as HTMLElement
  el.style.height = '0'
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
}

function onLeave(element: Element, done: () => void) {
  const el = element as HTMLElement
  el.style.height = '0'

  el.addEventListener('transitionend', done, { once: true })
}

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

// TODO: optimized this one
function mergedProps(itemProps: NAccordionItemProps) {
  return Object.assign(pickProps(props, ['reverse', 'icon', 'btn', 'label', 'leading', 'loading', 'loadingPlacement', 'nv', 'trailing', 'leading', 'to', 'type', 'disabled']), itemProps)
}

const btnVariants = ['solid', 'outline', 'soft', 'ghost', 'link', 'text'] as const
const hasVariant = computed(() => btnVariants.some(btnVariants => props.btn?.includes(btnVariants)))
const isBaseVariant = computed(() => props.btn?.includes('~'))
</script>

<template>
  <div
    :accordion="accordion"
    class="accordion"
    :class="[
      unstyle ? 'space-y-3' : 'accordion-(border divider)',
      nv?.accordion,
    ]"
  >
    <Disclosure
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open, close }"
      as="div"
      accordion="item"
      :default-open="item.defaultOpen ?? defaultOpen"
      :class="nv?.accordionItem"
    >
      <DisclosureButton
        :ref="() => (buttonRefs[i] = close)"
        as="template"
        :disabled="item.disabled ?? disabled"
        @click="closeOthers(i)"
      >
        <slot name="label" :item="item" :index="i" :open="open" :close="close">
          <NButton
            v-bind="mergedProps(item)"
            :btn="`~ block ${btn ?? ''}`"
            :class="[{ 'btn-text': !hasVariant && !isBaseVariant }, nv?.accordionButton]"
            accordion="button"
            :nv="{
              btnLabel: 'accordion-label',
            }"
          >
            <template #leading>
              <!-- TODO: fix conditional statement -->
              <NIcon
                v-if="leading || item.leading"
                accordion="leading"
                :class="nv?.accordionLeading"
                :name="item.leading ?? leading ?? ''"
                aria-hidden="true"
              />
            </template>

            <template #trailing>
              <span
                v-if="trailingOpen || trailingClose"
                accordion="trailing"
                :class="[
                  trailingClose || (!trailingClose && open)
                    ? nv?.accordionTrailingClose ?? 'accordion-trailing-close'
                    : nv?.accordionTrailingOpen ?? 'accordion-trailing-open',
                  nv?.accordionTrailing,
                ]"
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

      <DefineTemplate>
        <slot
          :name="item.content ? 'content' : i"
          :item="item" :index="i" :open="open" :close="close"
        >
          <div
            accordion="panel"
            :class="[
              nv?.accordionPanel,
              { 'border-t-0': unstyle },
            ]"
          >
            {{ item.content }}
          </div>
        </slot>
      </DefineTemplate>

      <Transition
        :enter-active-class="nv?.accordionLeaveActive ?? 'accordion-leave-active'"
        :leave-active-class="nv?.accordionEnterActive ?? 'accordion-enter-active'"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <DisclosurePanel v-if="!item.mounted ?? !mounted">
          <ReuseTemplate />
        </DisclosurePanel>
        <DisclosurePanel
          v-else
          v-show="open"
          static
        >
          <ReuseTemplate />
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</template>
