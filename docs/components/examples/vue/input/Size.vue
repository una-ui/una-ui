<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NVInput
      input="xs"
      placeholder="This is the extra small size"
    />

    <NVInput
      input="sm"
      placeholder="This is the small size"
    />

    <NVInput
      input="md"
      placeholder="This is the medium size (default)"
    />

    <NVInput
      input="lg"
      placeholder="This is the large size"
    />

    <NVInput
      input="xl"
      placeholder="This is the extra large size"
    />

    <NVInput
      class="px-8 py-10 text-2xl"
      placeholder="This is the custom size"
    />
  </div>
</template>
