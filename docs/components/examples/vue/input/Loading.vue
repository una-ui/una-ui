<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NVInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NVInput
      :nv="{
        inputLoadingIcon: 'i-gg-spinner-two',
        inputLoadingBase: 'text-lime',
      }"
      loading
      placeholder="Custom color loading icon"
    />

    <NVInput
      leading="i-heroicons-magnifying-glass-plus-20-solid text-blue"
      :nv="{
        inputLoadingIcon: 'i-gg-spinner-two-alt',
        inputLoadingBase: 'text-orange',
      }"
      loading
      reverse
      placeholder="Loading icon is on the left side"
    />

    <NVInput
      :nv="{
        inputLoadingIcon: 'i-heroicons-ellipsis-horizontal-20-solid',
        inputLoadingBase: 'animate-pulse text-yellow',
      }"
      loading
      placeholder="This is possible too"
    />
  </div>
</template>
