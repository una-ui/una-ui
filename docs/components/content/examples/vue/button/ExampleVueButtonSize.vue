<template>
  <div flex="~ col" gap-4>
    <div>
      <NButton
        text="xs"
        label="button xs"
      />
    </div>

    <div>
      <NButton
        text="sm"
        label="button sm"
      />
    </div>

    <div>
      <NButton
        text="md"
        label="button default"
      />
    </div>

    <div>
      <NButton
        text="lg"
        label="button lg"
      />
    </div>

    <div>
      <NButton
        text="xl"
        label="button xl"
      />
    </div>

    <div>
      <NButton
        text="xs hover:xl"
        btn="solid hover:solid-indigo"
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
