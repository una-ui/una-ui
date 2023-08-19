<template>
  <div class="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
    <article>
      <slot />
    </article>

    <Ellipsis
      :colors="['rgba(var(--una-primary))', 'rgba(var(--una-primary), 0.5)', 'rgba(var(--una-primary), 0.6)']"
      height="10rem" width="10rem" top="60rem" left="-10rem" blur="15rem"
    />
  </div>
</template>
