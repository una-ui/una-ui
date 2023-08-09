<template>
  <div flex="~ col" space-y-4>
    <span class="text-sm font-medium">Dynamic colors:</span>

    <div flex flex-wrap gap-2>
      <NBadge badge="soft-primary" label="soft-primary (default)" />

      <NBadge badge="solid-pink" label="solid-pink" />

      <NBadge badge="outline-info" label="outline-info" />

      <NBadge badge="soft-success" label="soft-success" />

      <NBadge badge="solid-yellow" label="outline-yellow" />

      <NBadge badge="outline-error" label="outline-error" />

      <NBadge badge="soft-indigo" label="outline-indigo" />
    </div>

    <hr border="base">

    <span class="text-sm font-medium">Static colors:</span>

    <div flex flex-wrap gap-2>
      <NBadge badge="soft-gray" label="soft-gray" />

      <NBadge badge="solid-black" label="solid-black" />

      <NBadge badge="outline-white" label="outline-white" />
    </div>
  </div>
</template>
