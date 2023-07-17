<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NInput
      :nv="{
        inputLoadingIcon: 'i-tabler-fidget-spinner',
        inputLoadingBase: 'text-lime',
      }"
      loading
      placeholder="Custom color loading icon"
    />

    <NInput
      leading="i-heroicons-magnifying-glass-plus-20-solid text-blue"
      :nv="{
        inputLoadingIcon: 'i-svg-spinners-12-dots-scale-rotate',
        inputLoadingBase: 'text-rose animate-none',
      }"
      loading
      reverse
      placeholder="Loading icon is on the left side"
    />

    <NInput
      :nv="{
        inputLoadingIcon: 'i-heroicons-ellipsis-horizontal-20-solid',
        inputLoadingBase: 'animate-pulse text-yellow',
      }"
      loading
      placeholder="This is possible too"
    />
  </div>
</template>
