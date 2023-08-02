<template>
  <div flex gap-4>
    <NSwitch
      :model-value="true"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchSliderChecked: 'switch-checked-error',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchSliderChecked: 'switch-checked-info',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchSliderChecked: 'switch-checked-pink',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchSliderChecked: 'switch-checked-red',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchSliderChecked: 'switch-checked-indigo',
      }"
    />
  </div>
</template>
