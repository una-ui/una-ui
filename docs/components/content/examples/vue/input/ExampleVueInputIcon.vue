<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <div>
      <NInput
        leading="i-heroicons-magnifying-glass-20-solid"
        placeholder="This is leading icon"
      />
    </div>

    <div>
      <NInput
        input="outline-lime"
        trailing="i-heroicons-question-mark-circle-20-solid text-primary"
        placeholder="This is trailing icon with custom class"
      />
    </div>

    <div col-span-2>
      <NInput
        input="outline-purple"
        size="1.1rem"
        leading="i-heroicons-paper-clip-20-solid"
        trailing="i-heroicons-chat-bubble-left-ellipsis-20-solid"
        :nv="{
          inputLeadingWrapper: 'text-yellow',
          inputTrailingWrapper: 'text-blue',
        }"
        placeholder="You can also use nv to add custom class"
      />
    </div>
  </div>
</template>
