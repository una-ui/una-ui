<template>
  <div class="flex flex-wrap items-center justify-around gap-10">
    <NPinInput :model-value="['s', 'm']" size="sm" />
    <NPinInput :model-value="['m', 'd']" size="md" />
    <NPinInput :model-value="['l', 'g']" size="lg" />
  </div>
</template>
