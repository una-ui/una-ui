<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      input="xs"
      placeholder="This is the extra small size"
    />

    <NInput
      input="sm"
      placeholder="This is the small size"
    />

    <NInput
      input="md"
      placeholder="This is the medium size (default)"
    />

    <NInput
      input="lg"
      placeholder="This is the large size"
    />

    <NInput
      input="xl"
      placeholder="This is the extra large size"
    />

    <NInput
      class="px-8 py-10 text-2xl"
      placeholder="This is the custom size"
    />
  </div>
</template>
