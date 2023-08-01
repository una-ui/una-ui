<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      input="xs"
      placeholder="This is extra small size"
    />

    <NInput
      input="sm"
      placeholder="This is small size (default)"
    />

    <NInput
      input="md"
      placeholder="This is medium size"
    />

    <NInput
      input="2xl"
      placeholder="This is 2xl size"
    />

    <NInput
      input="lg"
      class="rounded-full"
      placeholder="This is custom"
    />

    <NInput
      input="26px"
      placeholder="This is custom"
      class="rounded-br-full rounded-tl-full"
    />

    <NInput
      :nv="{
        inputWrapper: 'sm:col-span-2',
      }"
      input="6rem"
      placeholder="This is 6rem size"
    />
  </div>
</template>
