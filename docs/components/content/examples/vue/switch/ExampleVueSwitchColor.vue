<template>
  <div flex items-center gap-4>
    <NSwitch
      :model-value="true"
      type="short"
      switch="primary"
    />

    <NSwitch
      :model-value="true"
      switch="green"
    />

    <NSwitch
      :model-value="true"
      type="short"
      switch="info"
    />

    <NSwitch
      :model-value="true"
      switch="pink"
    />

    <NSwitch
      :model-value="true"
      type="short"
      switch="purple"
    />

    <NSwitch
      :model-value="true"
      switch="warning"
    />
  </div>
</template>
