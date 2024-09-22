<template>
  <NPopover
    :_popover-content="{ side: 'top', class: 'w-14' }"
    data-animate="duration-2s! zoom fade spin-720 slide"
  >
    <template #trigger>
      <NButton label="🌎" title="Launch" btn="solid-white" />
    </template>
    🚀
  </NPopover>
</template>
