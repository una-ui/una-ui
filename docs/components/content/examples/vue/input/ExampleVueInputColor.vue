<template>
  <div flex="~ col" gap-4>
    <span class="text-sm font-medium">Dynamic colors:</span>

    <div grid="~ sm:cols-2" gap-4>
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

    <hr border="base">

    <span class="text-sm font-medium">Static color:</span>

    <div>
      <NInput
        input="outline-gray"
        placeholder="This is the gray color"
      />
    </div>
  </div>
</template>
