<template>
  <div class="flex flex-col space-y-4">
    <NProgress
      :model-value="23"
      progress="primary"
    />

    <NProgress
      :model-value="54"
      progress="error"
    />

    <NProgress
      :model-value="60"
      progress="indigo"
    />

    <NProgress
      :model-value="45"
      progress="orange"
    />
  </div>
</template>
