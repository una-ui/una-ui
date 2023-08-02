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
        switchChecked: 'switch-checked-error',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-info"
      :nv="{
        switchChecked: 'switch-checked-info',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-pink"
      :nv="{
        switchChecked: 'switch-checked-pink',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-red"
      :nv="{
        switchChecked: 'switch-checked-red',
      }"
    />

    <NSwitch
      :model-value="true"
      switch="focus-indigo"
      :nv="{
        switchChecked: 'switch-checked-indigo',
      }"
    />
  </div>
</template>
