<template>
  <div flex="~ col" space-y-4>
    <NVInput
      input="outline-yellow"
      leading="i-carbon-search"
      placeholder="This is leading icon"
    />
    <NVInput
      input="outline-lime"
      trailing="i-carbon-location-person-filled text-primary"
      placeholder="This is trailing icon"
    />
    <NVInput
      input="outline-purple"
      leading="i-carbon-search text-purple"
      trailing="i-carbon-location-person-filled text-red"
      placeholder="This is both leading and trailing icon"
    />
  </div>
</template>
