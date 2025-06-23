<template>
  <div class="grid grid-cols-2 gap-4">
    <NNumberField
      leading="i-tabler-square-rounded-minus-filled text-red"
      trailing="i-tabler-square-rounded-plus-filled text-lime"
      :default-value="10"
    />

    <NNumberField
      :step="20"
      leading="i-tabler-arrow-big-down-filled"
      :default-value="10"
      trailing="i-tabler-arrow-big-up-filled"
    />
  </div>
</template>
