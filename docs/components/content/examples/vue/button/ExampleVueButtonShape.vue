<template>
  <div flex="~ col sm:row" gap-4>
    <div>
      <NButton
        label="PR"
        btn="square solid-orange"
      />
    </div>

    <div>
      <NButton
        label="PR"
        btn="square solid-lime"
        class="rounded-full"
      />
    </div>

    <div>
      <NButton
        label="square + rounded-none"
        btn="square solid-pink"
        class="rounded-none"
      />
    </div>

    <div>
      <NButton
        label="square + rounded-full"
        btn="square solid-green"
        class="rounded-full"
      />
    </div>

    <div>
      <NButton
        label="rectangle + custom-rounded"
        btn="solid-indigo"
        class="rounded-b-none rounded-t-2xl text-white"
      />
    </div>
  </div>
</template>
