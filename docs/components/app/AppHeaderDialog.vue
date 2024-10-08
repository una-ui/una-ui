<script setup lang="ts">
const { navigation } = useContent()
const { config } = useDocus()

const show = ref(false)

const filtered = computed(() => config.value.aside?.exclude || [])

const links = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path))
      return false
    return true
  })
})

const { close, open } = useMenu()

watch(show, v => (v ? open() : close()))
</script>

<template>
  <NButton
    icon
    class="ml-1 lg:hidden"
    label="i-radix-icons-hamburger-menu"
    btn="ghost-gray"
    square
    @click="show = true"
  />

  <teleport to="body">
    <nav
      v-if="show"
      class="dialog"
      @click="show = false"
    >
      <div @click.stop>
        <div>
          <AppPackageNavigation class="z-20 -ml-2" />

          <div class="icons ml-auto">
            <AppSocialIcons />
          </div>

          <NButton
            icon
            label="i-close"
            btn="soft-gray"
            square
            @click="show = false"
          />
        </div>

        <DocsAsideTree :links="links" />
      </div>
    </nav>
  </teleport>
</template>

<style scoped lang="ts">
css({
  '.dialog': {
    'position': 'fixed',
    'inset': '0 0 0 0',
    'zIndex': '50',
    'display': 'flex',
    'alignItems': 'flex-start',
    'justifyContent': 'flex-start',
    'overflowY': 'auto',
    'backgroundColor': 'rgba(255, 255, 255, 0.5)',
    'backdropFilter': '{elements.backdrop.filter}',
    '@dark': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    '@lg': {
      display: 'none',
    },
    '.icons': {
      overflow: 'auto',
    },
    // Dialog content
    '& > div': {
      'maxWidth': '{size.xs}',
      'width': '100%',
      'minHeight': '100%',
      'boxShadow': '{shadow.md}',
      'px': '{space.4}',
      'backgroundColor': '{color.white}',
      '@dark': {
        backgroundColor: '{color.black}',
      },
      '@sm': {
        px: '{space.6}',
      },
      // Dialog header
      '& > div': {
        'height': '{docus.header.height}',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'borderBottom': '1px solid transparent',
        'gap': '{space.2}',
        '.icons': {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  },
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}',
  },
})
</style>
