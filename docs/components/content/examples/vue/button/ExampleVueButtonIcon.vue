<template>
  <div flex="~ col" gap-4>
    <span class="text-sm font-medium">
      Icon button
    </span>

    <div flex="~ row" gap-2>
      <NButton
        label="i-heroicons-envelope-solid group-focus:i-heroicons-envelope-open-solid"
        icon
        btn="rectangle"
        class="group"
      />

      <NButton
        label="i-heroicons-envelope-solid group-focus:i-heroicons-envelope-open-solid"
        icon
        btn="square"
        class="group"
      />

      <NButton
        label="i-heroicons-envelope-solid group-focus:i-heroicons-envelope-open-solid"
        icon
        btn="circle"
        class="group"
      />
    </div>

    <hr border="base">

    <span class="text-sm font-medium">
      Leading icon with label
    </span>

    <div flex="~ col sm:row" gap-2>
      <NButton
        leading="i-logos-google-icon text-lg"
        btn="solid-white"
        label="Sign in with Google"
      />
      <NButton
        leading="i-logos-facebook text-lg"
        btn="solid-black"
        label="Sign in with Facebook"
      />
    </div>

    <hr border="base">

    <span class="text-sm font-medium">
      Trailing icon with label
    </span>

    <div flex="~ col sm:row" gap-2>
      <NButton
        trailing="i-heroicons-arrow-right-on-rectangle-20-solid"
        label="Login"
      />
      <NButton
        trailing="i-heroicons-envelope-20-solid"
        btn="solid-lime"
        label="Subscribe now"
      />
    </div>
  </div>
</template>
