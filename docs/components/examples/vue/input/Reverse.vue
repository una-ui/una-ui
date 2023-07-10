<template>
  <div flex="~ col" space-y-4>
    <NVInput
      input="outline-purple"
      leading="i-heroicons-paper-clip-20-solid"
      trailing="i-heroicons-chat-bubble-left-ellipsis-20-solid"
      :nv="{
        inputLeadingWrapper: 'text-yellow',
        inputTrailingWrapper: 'text-blue',
        inputWrapper: 'col-span-2',
      }"
      placeholder="This is leading and trailing icon with reverse"
      reverse
    />
  </div>
</template>
