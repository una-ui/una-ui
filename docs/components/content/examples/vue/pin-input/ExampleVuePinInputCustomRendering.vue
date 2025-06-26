<script setup lang="ts">
const value = ref(['1', '2', '3', '4', '5', '6'])
</script>

<template>
  <div class="flex flex-col flex-wrap gap-6 md:flex-row">
    <div class="grid gap-2">
      <NLabel for="simple">
        Simple
      </NLabel>
      <NPinInput id="simple" :max-length="6">
        <NPinInputGroup>
          <NPinInputSlot :index="0" />
          <NPinInputSlot :index="1" />
          <NPinInputSlot :index="2" />
        </NPinInputGroup>
        <NPinInputSeparator />
        <NPinInputGroup>
          <NPinInputSlot :index="3" />
          <NPinInputSlot :index="4" />
          <NPinInputSlot :index="5" />
        </NPinInputGroup>
      </NPinInput>
    </div>

    <div class="grid gap-2">
      <NLabel for="digits-only">
        Digits Only
      </NLabel>
      <NPinInput id="digits-only" :max-length="6" type="number">
        <NPinInputGroup>
          <NPinInputSlot :index="0" />
          <NPinInputSlot :index="1" />
          <NPinInputSlot :index="2" />
          <NPinInputSlot :index="3" />
          <NPinInputSlot :index="4" />
          <NPinInputSlot :index="5" />
        </NPinInputGroup>
      </NPinInput>
    </div>

    <div class="grid gap-2">
      <NLabel for="with-separator">
        With Separator
      </NLabel>
      <NPinInput
        id="with-separator"
        v-model="value"
        :max-length="6"
      >
        <NPinInputGroup>
          <NPinInputSlot :index="0" />
          <NPinInputSlot :index="1" />
        </NPinInputGroup>
        <NPinInputSeparator />
        <NPinInputGroup>
          <NPinInputSlot :index="2" />
          <NPinInputSlot :index="3" />
        </NPinInputGroup>
        <NPinInputSeparator />
        <NPinInputGroup>
          <NPinInputSlot :index="4" />
          <NPinInputSlot :index="5" />
        </NPinInputGroup>
      </NPinInput>
    </div>

    <div class="grid gap-2">
      <NLabel for="with-spacing">
        With Spacing
      </NLabel>
      <NPinInput id="with-spacing" :max-length="6">
        <NPinInputGroup class="gap-2 [&>*[data-slot=pin-input-slot]]:border [&>*[data-slot=pin-input-slot]]:rounded-md">
          <NPinInputSlot :index="0" aria-invalid="true" />
          <NPinInputSlot :index="1" aria-invalid="true" />
          <NPinInputSlot :index="2" aria-invalid="true" />
          <NPinInputSlot :index="3" aria-invalid="true" />
        </NPinInputGroup>
      </NPinInput>
    </div>
  </div>
</template>
