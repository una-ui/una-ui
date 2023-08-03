<template>
  <div flex items-center gap-4>
    <NSwitch
      :model-value="true"
      type="short"
      switch="primary focus"
    />

    <NSwitch
      :model-value="true"
      switch="green focus"
    />

    <NSwitch
      :model-value="true"
      type="short"
      switch="info focus"
    />

    <NSwitch
      :model-value="true"
      switch="pink focus"
    />

    <NSwitch
      :model-value="true"
      type="short"
      switch="purple focus"
    />

    <NSwitch
      :model-value="true"
      switch="warning focus"
    />
  </div>
</template>
