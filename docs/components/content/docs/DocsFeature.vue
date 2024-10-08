<script setup lang="ts">
// draft
</script>

<template>
  <div grid="~ cols-3" class="my-4">
    <!-- card -->
    <div class="group border border-base rounded-lg bg-muted p-4 transition duration-300 ease-out space-y-4 hover:border-primary hover:bg-background hover:ease-in">
      <!-- icon -->
      <div class="flex">
        <div class="w-auto rounded bg-$c-gray-200 px-2.5 py-2 text-2xl">
          <NIcon
            name="i-heroicons-archive-box-arrow-down"
          />
        </div>
      </div>
      <!-- content -->
      <div>
        <h3 class="text-xl font-bold group-hover:text-primary-active">
          Presets
        </h3>

        <p class="mt-2 text-$c-gray-800">
          Built-in presets to style any component with a single prop.
        </p>
      </div>

      <!-- action -->
      <div>
        <NButton
          class="px-0 text-primary"
        >
          <span class="mr-2">
            Learn more
          </span>
          <NIcon name="i-heroicons-arrow-right-20-solid" />
        </NButton>
      </div>
    </div>
  </div>
</template>
