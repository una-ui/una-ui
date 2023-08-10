<template>
  <div flex="~ col" gap-4>
    <span class="text-sm font-medium">Dynamic colors:</span>
    <div flex="~ items-center" gap-4>
      <NAvatar avatar="solid-gray">
        PR
      </NAvatar>

      <NAvatar avatar="solid-primary">
        PR
      </NAvatar>

      <NAvatar avatar="soft-error">
        PR
      </NAvatar>

      <NAvatar avatar="soft-info">
        PR
      </NAvatar>

      <NAvatar avatar="outline-purple">
        PR
      </NAvatar>

      <NAvatar avatar="outline-pink">
        PR
      </NAvatar>
    </div>

    <hr border="base">

    <span class="text-sm font-medium">Static colors:</span>

    <div flex="~ items-center" gap-4>
      <NAvatar avatar="solid-black">
        PR
      </NAvatar>

      <NAvatar avatar="solid-white">
        PR
      </NAvatar>
    </div>
  </div>
</template>
