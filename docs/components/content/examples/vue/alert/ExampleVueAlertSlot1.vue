<template>
  <NAlert alert="solid-gray">
    <NIcon name="i-lucide-circle-check" />
    <NAlertTitle class="overflow-ellipsis max-w-[calc(100%-4rem)]">
      The selected emails have been marked as spam.
    </NAlertTitle>
    <NButton
      btn="outline-gray"
      class="absolute right-3 top-2.5 h-6 shadow-none"
    >
      Undo
    </NButton>

    <NAlertDescription>
      This is a very long alert description that demonstrates how the
      component handles extended text content and potentially wraps across
      multiple lines
    </NAlertDescription>
  </NAlert>
</template>
