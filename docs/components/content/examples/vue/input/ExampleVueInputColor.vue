<template>
  <div class="flex flex-col gap-4">
    <span class="text-sm font-medium">Dynamic colors:</span>

    <div class="grid gap-4 sm:cols-2">
      <NInput
        input="outline-primary"
        placeholder="This is the primary color (default)"
      />
      <NInput
        input="outline-indigo"
        placeholder="This is the indigo color"
      />
      <NInput
        input="outline-rose"
        placeholder="This is the rose color"
      />
      <NInput
        input="outline-lime"
        placeholder="This is the lime color"
      />
    </div>

    <NSeparator />

    <span class="text-sm font-medium">Static colors:</span>

    <div class="flex flex-col gap-4">
      <NInput
        input="outline-gray"
        placeholder="This is the gray color"
      />
      <NInput
        input="outline-black"
        placeholder="This is the black color"
      />
    </div>
  </div>
</template>
