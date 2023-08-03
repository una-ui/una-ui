<template>
  <div flex gap-4>
    <NSwitch
      switch="xs"
    />

    <NSwitch
      :model-value="true"
      switch="xl"
    />

    <NSwitch
      :model-value="true"
      switch="3vw"
      variant="short"
    />

    <NSwitch
      switch="1cm"
    />

    <NSwitch
      switch="40px"
      variant="short"
    />
  </div>
</template>
