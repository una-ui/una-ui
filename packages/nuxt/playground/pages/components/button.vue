<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">Dynamic colors:</span>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 md:flex-row">
        <NButton
          label="solid-primary"
        />
        <NButton
          label="outline"
          btn="outline"
        />
        <NButton
          label="link"
          btn="link"
        />
        <NButton
          label="soft"
          btn="soft"
        />
        <NButton
          label="ghost"
          btn="ghost"
        />
        <NButton
          label="text"
          btn="text"
        />
      </div>

      <NSeparator />

      <span class="text-sm font-medium">Color with states:</span>

      <div class="flex flex-col gap-4 md:flex-row">
        <NButton
          btn="solid-error hover:solid-success"
          label="hover me"
        />
        <NButton
          label="you can add transition too"
          class="transition delay-300 ease-in-out"
          btn="soft-error hover:soft-success"
        />
        <NButton
          btn="active:outline-fuchsia"
          label="click me"
        />
        <NButton
          label="click me"
          btn="outline-pink focus:outline-blue"
        />
      </div>

      <NSeparator />

      <span class="text-sm font-medium">Custom colors using utilities:</span>

      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          btn="~"
          class="from-primary to-$c-brand-next bg-gradient-to-r text-white hover:from-pink-500 hover:to-yellow-500"
          label="gradient color"
        />

        <NButton
          btn="~"
          class="from-primary-500 via-primary-600 to-primary-700 bg-gradient-to-r text-white shadow-lg shadow-primary-500/50 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-primary-800/80 dark:focus:ring-primary-800"
          label="glowing effect"
        />
      </div>
    </div>

    <NSeparator />

    <span class="text-sm font-medium">Static colors:</span>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          label="solid-gray"
          btn="solid-gray"
        />
        <NButton
          label="soft-gray"
          btn="soft-gray"
        />
        <NButton
          label="outline-gray"
          btn="outline-gray"
        />
        <NButton
          label="ghost-gray"
          btn="ghost-gray"
        />
        <NButton
          label="link-gray"
          btn="link-gray"
        />
        <NButton
          label="text-gray"
          btn="text-gray"
        />
      </div>

      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          label="solid-white"
          btn="solid-white"
        />
        <NButton
          label="ghost-white"
          btn="ghost-white"
        />
        <NButton
          label="outline-white"
          btn="outline-white"
        />
      </div>

      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          label="solid-black"
          btn="solid-black"
        />
        <NButton
          label="soft-black"
          btn="soft-black"
        />
        <NButton
          label="link-black"
          btn="link-black"
        />
        <NButton
          label="text-black"
          btn="text-black"
        />
      </div>

      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          label="ghost-muted"
          btn="ghost-muted"
        />
        <NButton
          label="link-muted"
          btn="link-muted"
        />
        <NButton
          label="text-muted"
          btn="text-muted"
        />
      </div>
      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          label="soft-accent"
          btn="soft-accent"
        />
        <NButton
          label="text-accent"
          btn="text-accent"
        />
        <NButton
          label="link-accent"
          btn="link-accent"
        />
      </div>

      <div class="flex flex-col gap-2 md:flex-row">
        <NButton
          label="solid-secondary"
          btn="solid-secondary"
        />
      </div>
    </div>
  </div>
</template>
