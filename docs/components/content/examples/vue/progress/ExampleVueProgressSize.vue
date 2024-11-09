<template>
  <div class="flex flex-col space-y-4">
    <NProgress
      :model-value="54"
      progress="error"
      size="25px lg:3px"
    />

    <NProgress
      :model-value="23"
      progress="pink"
      size="xs"
    />

    <NProgress
      :model-value="10"
      progress="lime"
      size="0.5cm"
    />
  </div>
</template>
