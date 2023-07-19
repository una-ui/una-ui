<template>
  <div flex="~ col sm:row" gap-4>
    <div>
      <NButton
        btn="xs"
        label="xs"
      />
    </div>

    <div>
      <NButton
        btn="sm"
        label="sm"
      />
    </div>

    <div>
      <NButton
        btn="md"
        label="md"
      />
    </div>

    <div>
      <NButton
        btn="lg"
        label="lg"
      />
    </div>

    <div>
      <NButton
        btn="xl solid-indigo"
        label="xl"
      />
    </div>

    <div>
      <NButton
        btn="xs hover:xl"
        label="hover me"
      />
    </div>

    <div>
      <NButton
        class="px-8 py-10 text-2xl"
        label="custom"
      />
    </div>
  </div>
</template>
