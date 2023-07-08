<template>
  <div flex="~ col" space-y-4>
    <NVInput
      input="outline"
      disabled
      placeholder="You can't type here (disabled))"
    />

    <NVInput
      input="outline"
      readonly
      placeholder="You can't type here either (readonly))"
    />
  </div>
</template>
