<template>
  <div flex="~ col" space-y-4>
    <NVInput
      input="outline"
      disabled
      placeholder="You can't click here (disabled)"
    />

    <NVInput
      input="outline"
      readonly
      placeholder="You can't type here (readonly)"
    />
  </div>
</template>
