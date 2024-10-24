<template>
  <div class="flex flex-col space-y-6">
    <NLink to="#sponsors" class="cursor-pointer">
      <h2 id="sponsors" class="text-3xl font-bold">
        Sponsors
      </h2>
    </NLink>

    <div class="py-4 text-center">
      <NLink to="https://cdn.jsdelivr.net/gh/phojie/static/sponsors.svg" target="_blank" rel="noopener noreferrer">
        <img
          crossorigin="anonymous"
          inline-block
          class="h-auto max-w-4xl w-full"
          loading="lazy"
          src="https://cdn.jsdelivr.net/gh/phojie/static/sponsors.svg"
          alt="Anthony Fu's sponsors"
        >
      </NLink>
    </div>
  </div>
</template>
