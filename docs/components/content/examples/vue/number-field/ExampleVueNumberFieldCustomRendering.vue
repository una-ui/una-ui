<template>
  <NNumberField class="w-fit" :default-value="18" :min="0">
    <NNumberFieldContent>
      <NNumberFieldDecrement />
      <NNumberFieldInput />
      <NNumberFieldIncrement />
    </NNumberFieldContent>
  </NNumberField>
</template>
