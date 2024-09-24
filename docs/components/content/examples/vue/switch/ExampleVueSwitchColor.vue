<template>
  <div class="flex flex-wrap items-center gap-4">
    <NSwitch
      :model-value="true"
      outset
      switch="primary"
    />

    <NSwitch
      :model-value="true"
      switch="green"
    />

    <NSwitch
      :model-value="true"
      outset
      switch="info"
    />

    <NSwitch
      :model-value="true"
      switch="pink"
    />

    <NSwitch
      :model-value="true"
      outset
      switch="purple"
    />

    <NSwitch
      :model-value="true"
      switch="warning"
    />
  </div>
</template>
