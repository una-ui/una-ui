<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

defineProps({
  ...variants,
})
const { navigation, layout } = useContent()
const { hasDocSearch } = useDocSearch()
const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)
const { y } = useWindowScroll()

const isPageLayout = computed(() => layout.value === 'page')
</script>

<template>
  <header
    :class="[
      isPageLayout && y < 100 ? '!border-b-0 !bg-transparent' : 'border-b-1  !backdrop-blur-md bg-white/50 !dark:bg-gray-950/50',
      {
        'has-dialog': hasDialog,
        'has-doc-search': hasDocSearch,
      }]"
  >
    <Container grid="~ cols-12" items-center gap-3>
      <div
        col-span="1 lg:4"
        class="flex items-center"
      >
        <AppHeaderLogo />
        <AppHeaderNavigation />
      </div>

      <div col-span="11 lg:8" class="flex items-center justify-end gap-x-2">
        <AppSearch class="ml-2 mr-auto sm:mr-0" />

        <div class="hidden md:flex">
          <AppSocialIcons />
        </div>

        <ThemeSelect />

        <AppHeaderDialog v-if="hasDialog" />
      </div>
    </Container>
  </header>
</template>

<style scoped lang="ts">
css({
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}'
  },

  '.navbar-logo': {
    '.left &': {
      '.has-dialog &': {
        display: 'none',
        '@lg': {
          display: 'block'
        }
      },
    },
    '.center &': {
      display: 'block',
      '@lg': {
        display: 'none'
      }
    }
  },

  header: {
    backdropFilter: '{elements.backdrop.filter}',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    width: '100%',
    borderBottom: '1px solid {elements.border.primary.static}',
    backgroundColor: '{elements.backdrop.background}',
    height: '{docus.header.height}',

    '.container': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.2}'
    },

    '.section': {
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      '&.left': {
        gridColumn: 'span 4 / span 4',
        '@lg': {
          marginLeft: 0
        },
      },
      '&.center': {
        gridColumn: 'span 4 / span 4',
        justifyContent: 'center',
        flex: '1',
        zIndex: '1'
      },
      '&.right': {
        display: 'flex',
        gridColumn: 'span 4 / span 4',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'none',
        marginRight: 'calc(0px - {space.4})',
        '.social-icons': {
          display: 'none',
          '@md': {
            display: 'flex',
            alignItems: 'center',
          }
        }
      }
    }
  }
})
</style>
