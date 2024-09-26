<template>
  <div class="grid cols-1 gap-4 sm:cols-2">
    <NInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NInput
      :una="{
        inputLoading: 'text-lime',
        inputLoadingIcon: 'i-tabler-fidget-spinner',
      }"
      loading
      placeholder="Custom color loading icon"
    />

    <NInput
      :una="{
        inputLoading: 'text-rose animate-none',
        inputLoadingIcon: 'i-svg-spinners-blocks-shuffle-3',
      }"
      loading
      reverse
      placeholder="Loading icon is on the left side"
    />

    <NInput
      :una="{
        inputLoading: 'animate-pulse text-yellow',
        inputLoadingIcon: 'i-heroicons-ellipsis-horizontal-20-solid',
      }"
      loading
      placeholder="This is possible too"
    />
  </div>
</template>
