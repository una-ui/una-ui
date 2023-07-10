<template>
  <div grid="~ cols-2" gap-4>
    <NVInput
      leading="i-heroicons-magnifying-glass-20-solid"
      placeholder="This is leading icon"
    />
    <NVInput
      input="outline-lime"
      trailing="i-heroicons-question-mark-circle-20-solid text-primary"
      placeholder="This is trailing icon with custom class"
    />
    <NVInput
      input="outline-purple"
      leading="i-heroicons-paper-clip-20-solid"
      trailing="i-heroicons-chat-bubble-left-ellipsis-20-solid"
      :nv="{
        inputLeadingWrapper: 'text-yellow',
        inputTrailingWrapper: 'text-blue',
        inputWrapper: 'col-span-2',
      }"
      placeholder="You can also use nv to add custom class"
    />
  </div>
</template>
