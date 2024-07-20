<template>
  <div class="flex flex-col space-y-4">
    <NProgress
      :model-value="23"
      size="xs"
    />

    <NProgress
      :model-value="54"
      progress="error"
      size="25px lg:3px"
    />

    <NProgress
      :model-value="10"
      progress="lime"
      size="2cm"
    />
  </div>
</template>
