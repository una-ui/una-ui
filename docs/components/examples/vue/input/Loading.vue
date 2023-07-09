<template>
  <div flex="~ col" space-y-4>
    <NVInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NVInput
      :nv="{
        inputLoadingIcon: 'i-gg-spinner-two text-primary-500',
      }"
      loading
      placeholder="Start typing..."
    />

    <NVInput
      leading="i-carbon-search"
      :nv="{
        inputLoadingIcon: 'i-gg-spinner-two-alt',
      }"
      loading
      reverse
      placeholder="Start typing..."
    />
  </div>
</template>
