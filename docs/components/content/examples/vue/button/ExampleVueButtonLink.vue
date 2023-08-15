<template>
  <div flex="~ wrap" gap-4>
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
      to="https://github.com/nexvelt/ui"
      target="_blank"
      btn="outline-pink"
      class="rounded-none"
      leading="i-heroicons-star-20-solid text-yellow text-sm"
      label="Star us on GitHub"
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
