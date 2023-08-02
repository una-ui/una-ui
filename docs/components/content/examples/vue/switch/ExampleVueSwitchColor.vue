<template>
  <div flex gap-4>
    <NSwitch
      :model-value="true"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchChecked: 'switch-checked-error',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchChecked: 'switch-checked-info',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchChecked: 'switch-checked-pink',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchChecked: 'switch-checked-red',
      }"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchChecked: 'switch-checked-indigo',
      }"
    />
  </div>
</template>
