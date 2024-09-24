<script setup lang="ts">
import type { NAccordionItemProps, NAccordionProps } from '../../types'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { createReusableTemplate } from '@vueuse/core'
import { computed, ref } from 'vue'

import { pickProps } from '../../utils'
import NButton from './Button.vue'
import NIcon from './Icon.vue'

const props = withDefaults(defineProps<NAccordionProps>(), {
  trailingOpen: 'accordion-trailing-icon',
  loadingPlacement: 'trailing',
})

const buttonRefs = ref<(() => void)[]>([])

function closeOthers(index: number): void {
  if (props.multiple && !props.items[index].closeOthers)
    return

  buttonRefs.value
    .filter((_, i) => i !== index)
    .forEach(close => close())
}

function onEnter(element: Element, done: () => void): void {
  const el = element as HTMLElement
  el.style.height = '0'
  el.style.height = `${element.scrollHeight}px`
  el.addEventListener('transitionend', done, { once: true })
}

function onAfterEnter(element: Element): void {
  const el = element as HTMLElement
  el.style.height = 'auto'
}

function onBeforeLeave(element: Element): void {
  const el = element as HTMLElement
  el.style.height = `${el.scrollHeight}px`
}

function onLeave(element: Element, done: () => void): void {
  const el = element as HTMLElement
  el.style.height = '0'

  el.addEventListener('transitionend', done, { once: true })
}

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{
  item: NAccordionItemProps
  index: number
  open: boolean
  close: () => void
}>()

const pickedProps = pickProps(props, ['reverse', 'icon', 'btn', 'label', 'leading', 'loading', 'loadingPlacement', 'una', 'trailing', 'leading', 'to', 'type', 'disabled'])

function mergedProps(itemProps: NAccordionItemProps): NAccordionItemProps {
  return Object.assign(pickedProps, itemProps)
}

// TODO: refactor this to sync with NButton variants
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
      una?.accordion,
    ]"
  >
    <DefineTemplate v-slot="{ item, close, index, open }: any">
      <slot
        :name="item.content ? 'content' : index"
        :item="item" :index="index" :open="open" :close="close"
      >
        <div
          accordion="panel"
          :class="[
            una?.accordionPanel,
            { 'border-t-0': unstyle },
          ]"
        >
          {{ item.content }}
        </div>
      </slot>
    </DefineTemplate>

    <Disclosure
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open, close }"
      as="div"
      accordion="item"
      :default-open="item.defaultOpen || defaultOpen"
      :class="una?.accordionItem"
    >
      <DisclosureButton
        :ref="() => (buttonRefs[i] = close)"
        as="template"
        :disabled="item.disabled || disabled"
        @click="closeOthers(i)"
      >
        <slot name="label" :item="item" :index="i" :open="open" :close="close">
          <NButton
            v-bind="mergedProps(item)"
            :btn="`~ block ${btn || ''}`"
            :class="[
              { 'accordion-button-default-variant': !hasVariant && !isBaseVariant },
              { 'accordion-button-padding': !unstyle },
              una?.accordionButton,
            ]"
            :una="{
              btn: 'h-auto accordion-button',
              btnLabel: 'accordion-label',
            }"
          >
            <template #leading>
              <!-- TODO: fix conditional statement -->
              <NIcon
                v-if="leading || item.leading"
                accordion="leading"
                :class="una?.accordionLeading"
                :name="item.leading || leading || ''"
                aria-hidden="true"
              />
            </template>

            <template #trailing>
              <span
                v-if="trailingOpen || trailingClose"
                accordion="trailing"
                :class="[
                  trailingClose || (!trailingClose && open)
                    ? una?.accordionTrailingClose || 'accordion-trailing-close'
                    : una?.accordionTrailingOpen || 'accordion-trailing-open',
                  una?.accordionTrailing,
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

      <Transition
        :enter-active-class="una?.accordionLeaveActive || 'accordion-leave-active'"
        :leave-active-class="una?.accordionEnterActive || 'accordion-enter-active'"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <DisclosurePanel v-if="!item.mounted || !mounted">
          <ReuseTemplate
            v-bind="{
              item,
              index: i,
              open,
              close,
            }"
          />
        </DisclosurePanel>
        <DisclosurePanel
          v-else
          v-show="open"
          static
        >
          <ReuseTemplate
            v-bind="{
              item,
              index: i,
              open,
              close,
            }"
          />
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</template>
