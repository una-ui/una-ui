<template>
  <div class="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
    <article>
      <slot />
    </article>

    <Ellipsis
      :colors="['rgba(var(--c-primary), 1)', 'rgba(var(--c-primary), 1)', 'var(--nv-c-brand-next)']"
      height="10rem" width="10rem" top="60rem" left="-3rem" blur="10rem"
    />
  </div>
</template>
