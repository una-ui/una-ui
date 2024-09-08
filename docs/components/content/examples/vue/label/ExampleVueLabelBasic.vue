<template>
  <div class="grid gap-2">
    <div class="grid grid-cols-3 items-center gap-4">
      <NLabel for="width">
        Width
      </NLabel>
      <NInput
        id="width"
        type="text"
        model-value="100%"
        class="col-span-2 h-8"
      />
    </div>
    <div class="grid grid-cols-3 items-center gap-4">
      <NLabel for="maxWidth">
        Max. width
      </NLabel>
      <NInput
        id="maxWidth"
        type="text"
        model-value="300px"
        class="col-span-2 h-8"
      />
    </div>
    <div class="grid grid-cols-3 items-center gap-4">
      <NLabel for="height">
        Height
      </NLabel>
      <NInput
        id="height"
        type="text"
        model-value="25px"
        class="col-span-2 h-8"
      />
    </div>
    <div class="grid grid-cols-3 items-center gap-4">
      <NLabel for="maxHeight">
        Max. height
      </NLabel>
      <NInput
        id="maxHeight"
        type="text"
        model-value="none"
        class="col-span-2 h-8"
      />
    </div>
  </div>
</template>
