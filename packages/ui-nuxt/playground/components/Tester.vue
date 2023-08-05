<script setup lang="ts">
function click(description: string) {
  // eslint-disable-next-line no-alert
  alert(description)
}

const isPasswordVisible = ref(false)
</script>

<template>
  <div flex gap-4>
    <div>
      <NInput
        leading="i-heroicons-envelope-20-solid"
        loading
        placeholder="Leading and trailing icons are clickable"
      />
    </div>

    <div class="relative rounded-md text-sm shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span i-heroicons-hand-thumb-up-20-solid class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input type="text" input="outline" size="sm" class="pl-10">
    </div>
  </div>
</template>
