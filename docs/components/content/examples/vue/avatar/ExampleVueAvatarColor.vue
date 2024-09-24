<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">Dynamic colors:</span>
    <div class="flex items-center gap-4">
      <NAvatar avatar="solid-gray" label="PR" />

      <NAvatar avatar="solid-primary" label="PR" />

      <NAvatar avatar="soft-error" label="PR" />

      <NAvatar avatar="soft-info" label="PR" />

      <NAvatar avatar="outline-purple" label="PR" />

      <NAvatar avatar="outline-pink" label="PR" />
    </div>

    <hr class="border-base">

    <span class="text-sm font-medium">Static colors:</span>

    <div class="flex items-center gap-4">
      <NAvatar avatar="solid-black" label="PR" />

      <NAvatar avatar="solid-white" label="PR" />
    </div>
  </div>
</template>
