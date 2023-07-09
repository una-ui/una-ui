<template>
  <div flex="~ col" space-y-4>
    <NVInput
      input="outline-yellow"
      leading="i-carbon-search"
      placeholder="This is leading icon"
    />
    <NVInput
      input="outline-lime"
      trailing="i-carbon-shopping-cart text-blue"
      placeholder="You can also use attribute to add custom class"
    />
    <NVInput
      input="outline-purple"
      leading="i-carbon-search"
      trailing="i-carbon-location-person-filled"
      :nv="{
        inputLeadingWrapper: 'text-orange',
        inputTrailingWrapper: 'text-lime',
      }"
      placeholder="You can also use nv to add custom class"
    />
  </div>
</template>
