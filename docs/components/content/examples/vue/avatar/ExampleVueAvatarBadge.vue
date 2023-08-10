<template>
  <div flex="~ items-center" gap-4>
    <div class="relative">
      <NBadge badge="solid-red" label="1" size="11px" class="absolute z-1 rounded-full -right-1 -top-1" />
      <NAvatar>
        PR
      </NAvatar>
    </div>

    <div class="relative">
      <NBadge badge="~" class="absolute bottom-1 right-0 z-1 h-3 w-3 rounded-full bg-success p-none ring-2 ring-$c-background" />

      <NAvatar src="/images/avatar.png" alt="Phojie Rengel" />
    </div>
  </div>
</template>
