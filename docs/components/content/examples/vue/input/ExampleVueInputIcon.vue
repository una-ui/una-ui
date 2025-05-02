<template>
  <div class="grid cols-1 gap-4 sm:cols-2">
    <div class="sm:col-span-1">
      <NInput
        leading="i-lucide-search"
        placeholder="This is leading icon"
      />
    </div>

    <div class="sm:col-span-1">
      <NInput
        trailing="i-tabler-help-circle-filled text-primary"
        placeholder="This is trailing icon with custom class"
      />
    </div>

    <div class="sm:col-span-2">
      <NInput
        input="outline-purple"
        size="1.3rem"
        leading="i-tabler-paperclip"
        trailing="i-tabler-message-circle-filled"
        :una="{
          inputLeading: 'text-yellow',
          inputTrailing: 'text-blue',
        }"
        placeholder="You can also use una to add custom class"
      />
    </div>
  </div>
</template>
