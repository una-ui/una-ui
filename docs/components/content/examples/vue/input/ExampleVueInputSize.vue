<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      text="xs"
      placeholder="This is extra small size"
    />

    <NInput
      text="sm"
      placeholder="This is small size"
    />

    <NInput
      text="md"
      placeholder="This is medium size (default)"
    />

    <NInput
      text="2xl"
      placeholder="This is 2xl size"
    />

    <NInput
      text="lg"
      class="rounded-full"
      placeholder="This is custom"
    />

    <NInput
      text="26px"
      placeholder="This is custom"
      class="rounded-br-full rounded-tl-full"
    />

    <NInput
      :nv="{
        inputWrapper: 'sm:col-span-2',
      }"
      text="6rem"
      placeholder="This is 6rem size"
    />
  </div>
</template>
