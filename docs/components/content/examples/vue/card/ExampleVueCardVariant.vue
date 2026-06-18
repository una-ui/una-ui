<template>
  <div class="flex flex-col gap-4">
    <NCard
      title="Solid variant"
      description="A simple solid variant card with a border. This is the default variant if none is specified."
      card="solid"
    />

    <NCard
      title="Outline variant"
      description="A simple outline variant card without a border. This is the default variant if none is specified."
      card="outline"
    />

    <NCard
      title="Soft variant"
      description="A soft variant card with a subtle background color and border."
      card="soft"
    />

    <NCard
      title="Base variant"
      description="A base variant card without any predefined styles except for the base card styles."
      card="~"
    />
  </div>
</template>
