<template>
  <NFormField name="numberfield" size="100px" label="Numberfield" description="A number field component with increment and decrement buttons.">
    <NNumberField
      :min="0"
      :max="10"
      :default-value="5"
      :step="2"
    />
  </NFormField>
</template>
