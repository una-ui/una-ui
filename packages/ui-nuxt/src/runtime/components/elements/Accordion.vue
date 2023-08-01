<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { createReusableTemplate } from '@vueuse/core'

import { ref } from 'vue'
import type { NAccordionItemProps, NAccordionProps } from '../../types'
import { getPriority, omitProps } from '../../utils'
import NIcon from './Icon.vue'
import NButton from './Button.vue'

const props = withDefaults(defineProps<NAccordionProps>(), {
  trailingOpen: 'accordion-trailing-icon',
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

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{
  item: NAccordionItemProps
  i: number
  close: () => void
  open: boolean
}>()
</script>

<template>
  <div
    :accordion="`~ ${getPriority(accordion, 'accordion')}`"
    :class="variantMode ? 'space-y-3' : 'accordion-(border divider)'"
  >
    <Disclosure
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open, close }"
      as="div"
      accordion="item"
      :default-open="getPriority(item.defaultOpen, defaultOpen)"
      :class="nv?.accordionItem"
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
            :class="nv?.accordionButton"
            :reverse="getPriority(item.reverse, reverse)"
            loading-placement="trailing"
            v-bind="omitProps(item, ['content', 'defaultOpen', 'closeOthers', 'trailing', 'leading', 'btn', 'label'])"
            btn="base block"
            :label="item.label"
            :nv="{
              btnLabelBase: 'accordion-label-base',
            }"
          >
            <template #leading>
              <!-- TODO fix conditional statement -->
              <NIcon
                v-if="leading || item.leading"
                accordion="leading-base"
                :class="nv?.accordionLeadingBase"
                :name="getPriority(item.leading, leading) ?? ''"
                aria-hidden="true"
              />
            </template>

            <!-- TODO config to prop instead of slot -->
            <template #trailing>
              <span
                v-if="trailingOpen || trailingClose"
                accordion="trailing-base"
                :class="[
                  trailingClose || (!trailingClose && open)
                    ? getPriority(nv?.accordionTrailingClose, 'accordion-trailing-close')
                    : getPriority(nv?.accordionTrailingOpen, 'accordion-trailing-open'),
                  nv?.accordionTrailingBase,
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

      <DefineTemplate v-slot="{ open, i, close, item }">
        <slot
          :name="item.content ? 'content' : i"
          :item="item" :index="i" :open="open" :close="close"
        >
          <div
            accordion="panel"
            :class="[
              nv?.accordionPanel,
              { 'border-t-0': variantMode },
            ]"
          >
            {{ item.content }}
          </div>
        </slot>
      </DefineTemplate>

      <Transition
        :enter-active-class="getPriority(nv?.accordionLeaveActive, 'accordion-leave-active')"
        :leave-active-class="getPriority(nv?.accordionEnterActive, 'accordion-enter-active')"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <DisclosurePanel
          v-if="!getPriority(item.mounted, mounted)"
        >
          <ReuseTemplate v-bind="{ item, i, close, open }" />
        </DisclosurePanel>
        <DisclosurePanel
          v-else
          v-show="open"
          static
        >
          <ReuseTemplate v-bind="{ item, i, close, open }" />
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</template>
