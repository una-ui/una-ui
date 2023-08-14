<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      size="xs"
      placeholder="This is extra small size"
    />

    <NInput
      size="sm"
      placeholder="This is small size"
    />

    <NInput
      size="md"
      placeholder="This is base or md size (default)"
    />

    <NInput
      size="2xl"
      placeholder="This is 2xl size"
    />

    <NInput
      size="lg"
      class="rounded-full"
      placeholder="This is custom"
    />

    <NInput
      size="26px"
      placeholder="This is custom"
      class="rounded-none"
    />

    <NInput
      :nv="{
        inputWrapper: 'sm:col-span-2',
      }"
      size="6rem"
      placeholder="This is 6rem size"
    />
  </div>
</template>
