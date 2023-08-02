<template>
  <div flex gap-4>
    <NSwitch
      :model-value="true"
      switch="focus"
    />

    <NSwitch
      :model-value="true"
      switch="focus-error"
      :nv="{
        switchSliderChecked: 'switch-checked-error',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-info"
      :nv="{
        switchSliderChecked: 'switch-checked-info',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-pink"
      :nv="{
        switchSliderChecked: 'switch-checked-pink',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-red"
      :nv="{
        switchSliderChecked: 'switch-checked-red',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-indigo"
      :nv="{
        switchSliderChecked: 'switch-checked-indigo',
      }"
    />
  </div>
</template>
