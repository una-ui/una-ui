<template>
  <div flex="~ col" space-y-4>
    <NVInput
      input="outline"
      status="error"
      placeholder="This is the outline variant with error status"
    />
    <NVInput
      type="email"
      input="outline"
      status="success"
      placeholder="This is the outline variant with success status"
    />
    <NVInput
      type="email"
      input="outline"
      status="warning"
      placeholder="This is the outline variant with warning status"
    />
    <NVInput
      type="email"
      input="outline"
      status="info"
      placeholder="This is the outline variant with info status"
    />
  </div>
</template>
