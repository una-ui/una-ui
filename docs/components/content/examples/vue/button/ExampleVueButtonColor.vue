<template>
  <div flex="~ col" gap-4>
    <div flex="~ col" gap-4>
      <div flex="~ col md:row" gap-4>
        <NButton
          label="solid-primary"
          btn="solid-primary"
        />
        <NButton
          label="outline-lime"
          btn="outline-lime"
        />
        <NButton
          label="link-yellow"
          btn="link-yellow"
        />
        <NButton
          label="soft-red"
          btn="soft-red"
        />
        <NButton
          label="ghost-orange"
          btn="ghost-orange"
        />
      </div>

      <hr border="base">

      <span class="text-sm font-medium">Color with states:</span>

      <div flex="~ col md:row" gap-4>
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

      <hr border="base">

      <span class="text-sm font-medium">Custom colors using utilities:</span>

      <div flex="~ col md:row" gap-2>
        <NButton
          label="hover me"
          btn="base"
          class="from-primary to-$nv-c-brand-next bg-gradient-to-r text-white hover:from-pink-500 hover:to-yellow-500"
        />

        <NButton
          btn="base"
          class="from-primary-500 via-primary-600 to-primary-700 bg-gradient-to-r text-white shadow-lg shadow-primary-500/50 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-primary-800/80 dark:focus:ring-primary-800"
          label="glowing effect"
        />
      </div>
    </div>

    <hr border="base">

    <span class="text-sm font-medium">Grey buttons:</span>

    <div flex="~ col" gap-4>
      <div flex="~ col md:row" gap-2>
        <NButton
          label="solid-gray"
          btn="solid-gray"
        />
        <NButton
          label="ghost-gray"
          btn="ghost-gray"
        />
        <NButton
          label="link-gray"
          btn="link-gray"
        />
      </div>

      <div flex="~ col md:row" gap-2>
        <NButton
          label="solid-white"
          btn="solid-white"
        />
        <NButton
          label="ghost-white"
          btn="ghost-white"
        />
      </div>

      <div flex="~ col md:row" gap-2>
        <NButton
          label="solid-black"
          btn="solid-black"
        />
        <NButton
          label="link-black"
          btn="link-black"
        />
      </div>
    </div>
  </div>
</template>
