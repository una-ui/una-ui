<template>
  <div flex="1" space-x-4 space-y-2>
    <NButton
      size="xs"
      label="button xs"
    />

    <NButton
      size="sm"
      label="button sm (default)"
    />

    <NButton
      size="md"
      label="button md"
    />

    <NButton
      size="lg"
      label="button lg"
    />

    <NButton
      size="xl"
      label="button xl"
    />

    <NButton
      size="3vw"
      label="button 3vw"
    />

    <NButton
      size="1cm"
      label="button 1cm"
    />

    <NButton
      class="px-8 py-10 text-xs"
      label="custom size"
    />

    <NButton
      size="18px hover:40px"
      btn="solid hover:outline-lime"
      label="hover me 18px->40px"
    />
  </div>
</template>
