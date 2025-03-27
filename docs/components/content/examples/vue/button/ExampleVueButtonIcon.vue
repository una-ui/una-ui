<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">
      Icon buttons with and without square preset
    </span>

    <div class="flex flex-row gap-2">
      <NButton
        :square="false"
        label="i-heroicons-arrow-down-tray-20-solid"
        icon
      />

      <NButton
        label="i-heroicons-arrow-down-tray-20-solid"
        icon
        btn="soft"
        square
      />
    </div>

    <NSeparator />

    <span class="text-sm font-medium">
      Icon with states
    </span>

    <div class="flex flex-row gap-2">
      <NButton
        label="i-heroicons-bell-20-solid group-hover:i-heroicons-bell-alert-20-solid"
        icon
        btn="square solid-black"
        class="group rounded-none"
      />

      <NButton
        label="i-heroicons-envelope-20-solid group-focus:i-heroicons-envelope-open-20-solid"
        icon
        btn="outline-green square focus:outline-yellow"
        class="group rounded-full"
      />
    </div>

    <NSeparator />

    <span class="text-sm font-medium">
      Leading icon with label
    </span>

    <div class="flex flex-col gap-2 sm:flex-row">
      <NButton
        leading="i-logos-google-icon"
        btn="solid-gray"
        label="Sign in with Google"
      />
      <NButton
        leading="i-logos-facebook text-lg"
        btn="solid-white"
        label="Sign in with Facebook"
      />
      <NButton
        leading="i-bi-github text-lg"
        btn="solid-black"
        label="Sign in with Github"
      />
    </div>

    <NSeparator />

    <span class="text-sm font-medium">
      Trailing icon with label
    </span>

    <div class="flex flex-col gap-2 sm:flex-row">
      <NButton
        trailing="i-heroicons-at-symbol-20-solid"
        btn="outline"
        label="Subscribe now"
      />

      <NButton
        trailing="i-heroicons-arrow-right-on-rectangle-20-solid"
        label="Login"
      />
    </div>
  </div>
</template>
