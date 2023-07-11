<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NVInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NVInput
      :nv="{
        inputLoadingIcon: 'i-gg-spinner-two text-lime',
      }"
      status="info"
      placeholder="Custom color loading icon"
    />

    <NVInput
      leading="i-heroicons-magnifying-glass-plus-20-solid text-blue"
      :nv="{
        inputLoadingIcon: 'i-gg-spinner-two-alt text-orange',
      }"
      loading
      reverse
      placeholder="Loading icon is on the left side"
    />

    <NVInput
      :nv="{
        inputLoadingIcon: 'i-heroicons-ellipsis-horizontal-20-solid animate-pulse text-yellow',
      }"
      loading
      placeholder="Custom animation icon"
    />
  </div>
</template>
