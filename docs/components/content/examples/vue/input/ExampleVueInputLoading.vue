<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NInput
      :nv="{
        inputLoading: 'text-lime',
        inputLoadingIcon: 'i-tabler-fidget-spinner',
      }"
      loading
      placeholder="Custom color loading icon"
    />

    <NInput
      :nv="{
        inputLoading: 'text-rose animate-none',
        inputLoadingIcon: 'i-svg-spinners-blocks-shuffle-3',
      }"
      loading
      reverse
      placeholder="Loading icon is on the left side"
    />

    <NInput
      :nv="{
        inputLoading: 'animate-pulse text-yellow',
        inputLoadingIcon: 'i-heroicons-ellipsis-horizontal-20-solid',
      }"
      loading
      placeholder="This is possible too"
    />
  </div>
</template>
