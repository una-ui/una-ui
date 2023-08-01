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
        btn="sm"
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
        btn="lg"
        label="button lg"
      />
    </div>

    <div>
      <NButton
        btn="xl"
        label="button xl"
      />
    </div>

    <div>
      <NButton
        btn="3vw"
        label="button 3vw"
      />
    </div>

    <div>
      <NButton
        btn="1cm"
        label="button 1cm"
      />
    </div>

    <div>
      <NButton
        btn="solid hover:outline-lime 18px hover:40px"
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
