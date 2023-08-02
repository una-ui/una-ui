<template>
  <div flex items-center gap-4>
    <NSwitch
      :model-value="true"
      variant="short"
    />

    <NSwitch
      :model-value="true"
      :nv="{
        switchChecked: 'switch-checked-error',
      }"
    />

    <NSwitch
      :model-value="true"
      variant="short"
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
      variant="short"
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
