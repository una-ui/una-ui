<template>
  <div class="grid w-full place-items-center">
    <NCard
      class="w-full sm:w-300px"
      :_card-header="{
        class: 'p-0',
      }"
      :_card-content="{
        class: 'mt-4 pb-4',
      }"
    >
      <template #header>
        <NAspectRatio
          :ratio="5 / 2" class="relative"
          rounded="md b-none"
        >
          <template #default="{ aspect }">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3840&q=80"
              alt="Nature landscape image"
              class="h-full w-full object-cover"
            >
            <span class="absolute bottom-2 right-2 text-base fw500">{{ aspect }}%</span>
          </template>
        </NAspectRatio>
      </template>
      <p class="fw600 leading-none">
        Title
      </p>
      <span class="text-sm opacity-50">Description of the card.</span>
    </NCard>
  </div>
</template>
