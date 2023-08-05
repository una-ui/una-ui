<template>
  <div flex="~ col" gap-4>
    <div>
      <NButton
        size="xs"
        label="button xs"
      />
    </div>

    <div>
      <NButton
        size="sm"
        label="button sm (default)"
      />
    </div>

    <div>
      <NButton
        size="md"
        label="button md"
      />
    </div>

    <div>
      <NButton
        size="lg"
        label="button lg"
      />
    </div>

    <div>
      <NButton
        size="xl"
        label="button xl"
      />
    </div>

    <div>
      <NButton
        size="3vw"
        label="button 3vw"
      />
    </div>

    <div>
      <NButton
        size="1cm"
        label="button 1cm"
      />
    </div>

    <div>
      <NButton
        size="18px hover:40px"
        btn="solid hover:outline-lime"
        label="hover me 18px->40px"
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
