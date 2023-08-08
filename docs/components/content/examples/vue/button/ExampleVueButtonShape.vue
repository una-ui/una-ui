<template>
  <div flex="~ wrap" gap-4>
    <NButton
      label="PR"
      btn="square solid-orange"
    />

    <NButton
      label="PR"
      btn="square solid-lime"
      class="rounded-full"
    />

    <NButton
      label="square + rounded-none"
      btn="square solid-pink"
      class="rounded-none"
    />

    <NButton
      label="square + rounded-full"
      btn="square solid-green"
      class="rounded-full"
    />

    <NButton
      label="rectangle + custom-rounded"
      btn="solid-indigo"
      class="rounded-b-none rounded-t-2xl text-white"
    />
  </div>
</template>
