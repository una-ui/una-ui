<script setup lang="ts">
import type { DrawerRootEmits } from 'vaul-vue'
import type { NDrawerProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { useForwardPropsEmits, VisuallyHidden } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'
import { computed } from 'vue'
import { cn, randomId } from '../../utils'
import DrawerClose from './DrawerClose.vue'
import DrawerContent from './DrawerContent.vue'
import DrawerDescription from './DrawerDescription.vue'
import DrawerFooter from './DrawerFooter.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerTitle from './DrawerTitle.vue'
import DrawerTrigger from './DrawerTrigger.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDrawerProps>(), {
  shouldScaleBackground: true,
})
const emits = defineEmits<DrawerRootEmits>()
const DEFAULT_TITLE = randomId('drawer-title')
const DEFAULT_DESCRIPTION = randomId('drawer-description')

const title = computed(() => props.title ?? DEFAULT_TITLE)
const description = computed(() => props.description ?? DEFAULT_DESCRIPTION)

const rootProps = reactivePick(props, [
  'activeSnapPoint',
  'closeThreshold',
  'shouldScaleBackground',
  'setBackgroundColorOnScale',
  'scrollLockTimeout',
  'fixed',
  'dismissible',
  'modal',
  'open',
  'defaultOpen',
  'nested',
  'direction',
  'noBodyStyles',
  'handleOnly',
  'preventScrollRestoration',
  'snapPoints',
])

const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <DrawerRoot
    v-slot="{ open }"
    data-slot="drawer"
    v-bind="forwarded"
  >
    <slot>
      <DrawerTrigger
        v-bind="_drawerTrigger"
        as-child
      >
        <slot name="trigger" :open />
      </DrawerTrigger>

      <DrawerContent
        v-bind="_drawerContent"
        :_drawer-overlay
        :una
      >
        <VisuallyHidden v-if="(title === DEFAULT_TITLE || !!$slots.title) || (description === DEFAULT_DESCRIPTION || !!$slots.description)">
          <DrawerTitle v-if="title === DEFAULT_TITLE || !!$slots.title">
            {{ title }}
          </DrawerTitle>

          <DrawerDescription v-if="description === DEFAULT_DESCRIPTION || !!$slots.description">
            {{ description }}
          </DrawerDescription>
        </VisuallyHidden>

        <slot name="content">
          <div
            :class="cn(
              'content-wrapper',
              una?.drawerContentWrapper,
            )"
          >
            <!-- Header -->
            <DrawerHeader
              v-if="!!$slots.header || (title !== DEFAULT_TITLE || !!$slots.title) || (description !== DEFAULT_DESCRIPTION || !!$slots.description)"
              v-bind="_drawerHeader"
              :una
            >
              <slot name="header">
                <DrawerTitle
                  v-if="title !== DEFAULT_TITLE || !!$slots.title"
                  v-bind="_drawerTitle"
                  :una
                >
                  <slot name="title">
                    {{ title }}
                  </slot>
                </DrawerTitle>

                <DrawerDescription
                  v-if="description !== DEFAULT_DESCRIPTION || !!$slots.description"
                  v-bind="_drawerDescription"
                  :una
                >
                  <slot name="description">
                    {{ description }}
                  </slot>
                </DrawerDescription>
              </slot>
            </DrawerHeader>

            <!-- Body -->
            <slot name="body" />

            <!-- Footer -->
            <DrawerFooter
              v-bind="_drawerFooter"
              :una
            >
              <slot name="footer">
                <DrawerClose
                  v-bind="_drawerClose"
                >
                  <slot name="close" />
                </DrawerClose>
              </slot>
            </DrawerFooter>
          </div>
        </slot>
      </DrawerContent>
    </slot>
  </DrawerRoot>
</template>
