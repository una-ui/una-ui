<template>
  <NCard class="mx-10 max-[600px]:mx-auto">
    <template #header>
      <div h-40>
        <img alt="header" src="https://res.cloudinary.com/practicaldev/image/fetch/s--u7R0XdzJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://raw.githubusercontent.com/Ademking/ademking.github.io/main/assets/images/unocss-prev.png" h-full w-full class="min-[1052px]:object-cover">
      </div>
    </template>
    <template #title>
      Advanced Card
    </template>
    <template #description>
      This example shows how you can use named templates for customization
    </template>
    <template #footer>
      <div mt-2 w-full flex gap-4>
        <NButton btn="solid-gray" w-full>
          Submit
        </NButton>
        <NButton btn="outline-gray" w-full>
          Cancel
        </NButton>
      </div>
    </template>
  </NCard>
</template>
