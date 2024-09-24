<template>
  <div class="flex items-center gap-4">
    <NSwitch
      :model-value="true"
      outset
      switch="primary focus"
    />

    <NSwitch
      :model-value="true"
      switch="green focus"
    />

    <NSwitch
      :model-value="true"
      outset
      switch="info focus"
    />

    <NSwitch
      :model-value="true"
      switch="pink focus"
    />

    <NSwitch
      :model-value="true"
      outset
      switch="purple focus"
    />

    <NSwitch
      :model-value="true"
      switch="warning focus"
    />
  </div>
</template>
