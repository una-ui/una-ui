<template>
  <div flex="~ wrap" items-center gap-4>
    <NSwitch
      :model-value="true"
      outset
      loading
    />

    <NSwitch
      :model-value="false"
      switch="green"
      loading
    />

    <NSwitch
      :model-value="false"
      outset
      size="lg"
      loading
      switch="info"
    />

    <NSwitch
      :model-value="true"
      loading
      size="7"
      switch="pink"
    />

    <NSwitch
      :model-value="true"
      outset
      loading
      size="8"
      switch="purple"
    />

    <NSwitch
      :model-value="true"
      loading
      switch="warning"
    />
  </div>
</template>
