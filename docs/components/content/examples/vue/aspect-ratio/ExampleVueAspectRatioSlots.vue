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
        <NAspectRatio :ratio="5 / 2" class="relative">
          <template #default="{ aspect }">
            <img
              src="https://i.pinimg.com/736x/bd/02/93/bd0293d5ec30a515aa241ec302812187.jpg"
              alt="Abstract image"
              class="h-full w-full rounded-md rounded-b-none object-cover"
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
