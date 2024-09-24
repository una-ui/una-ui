<template>
  <div class="flex">
    <NInput
      placeholder="Search"
      trailing="i-heroicons-chat-bubble-left-right-20-solid"
      class="pl-12"
    >
      <template #leading>
        <!-- TODO convert to NAvatar soon -->
        <div class="rounded-full bg-base">
          <img
            class="h-6"
            src="https://avatars.githubusercontent.com/u/33350692?s=400&u=49395c835e8197ae2ee42ca02c95e828d8f64239&v=4"
          >
        </div>
      </template>
    </NInput>
  </div>
</template>
