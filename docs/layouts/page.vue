<template>
  <div class="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
    <article>
      <slot />
    </article>

    <Ellipsis
      :colors="['rgba(var(--una-primary), 1)', 'rgba(var(--una-primary), 1)', 'var(--c-brand-next)']"
      height="15rem" width="15rem" top="60rem" left="-10rem" blur="15rem"
    />
  </div>
</template>
