<template>
  <div grid="~ sm:cols-2" gap-4>
    <NInput
      status="error"
      placeholder="This is the outline variant with error status"
    />
    <NInput
      type="email"
      status="success"
      placeholder="This is the outline variant with success status"
    />
    <NInput
      type="email"
      status="warning"
      placeholder="This is the outline variant with warning status"
    />
    <NInput
      type="email"
      status="info"
      placeholder="This is the outline variant with info status"
    />
  </div>
</template>
