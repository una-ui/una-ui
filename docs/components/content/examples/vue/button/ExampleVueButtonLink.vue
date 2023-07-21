<template>
  <div flex gap-4>
    <NButton
      btn="solid-black"
      label="Previous page"
      leading="i-heroicons-arrow-small-left-20-solid"
      to="/components/elements/badge"
    />

    <NButton
      btn="solid-black"
      label="Next page"
      trailing="i-heroicons-arrow-small-right-20-solid"
      to="/components/elements/dropdown"
    />

    <NButton
      to="/docs"
      target="_blank"
      trailing="i-heroicons-arrow-up-right-20-solid"
      label="Go to home page"
    />

    <NButton
      btn="link"
      label="Back to top"
      leading="i-heroicons-arrow-small-up-20-solid"
      active-class="btn-link-lime"
      to="#button"
    />
  </div>
</template>
