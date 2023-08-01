<template>
  <div flex="~ col" gap-4>
    <div>
      <NButton
        btn="xs"
        label="button xs"
      />
    </div>

    <div>
      <NButton
        label="button sm"
      />
    </div>

    <div>
      <NButton
        label="button default"
      />
    </div>

    <div>
      <NButton
        label="button lg"
      />
    </div>

    <div>
      <NButton
        label="button xl"
      />
    </div>

    <div>
      <NButton
        btn="solid hover:solid-indigo xs hover:xl"
        label="hover me"
      />
    </div>

    <div>
      <NButton
        class="px-8 py-10 text-xs"
        label="custom size"
      />
    </div>
  </div>
</template>
