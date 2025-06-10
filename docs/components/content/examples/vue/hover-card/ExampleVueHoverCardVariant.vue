<script setup lang="ts">
const [DefineContent, ReuseContent] = createReusableTemplate()
</script>

<template>
  <div class="h-28 flex flex-wrap items-center justify-around gap-4">
    <NHoverCard hovercard="soft-primary">
      <template #trigger>
        <NButton btn="soft-primary">
          soft-primary
        </NButton>
      </template>
      <template #content>
        <ReuseContent />
      </template>
    </NHoverCard>
    <NHoverCard hovercard="outline-green">
      <template #trigger>
        <NButton btn="outline-green">
          outline-green
        </NButton>
      </template>
      <template #content>
        <ReuseContent />
      </template>
    </NHoverCard>
    <NHoverCard hovercard="soft-indigo">
      <template #trigger>
        <NButton btn="soft-indigo">
          soft-indigo
        </NButton>
      </template>
      <template #content>
        <ReuseContent />
      </template>
    </NHoverCard>
  </div>

  <DefineContent>
    <div class="flex justify-between space-x-4">
      <NAvatar src="https://github.com/vuejs.png" />
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">
          @vuejs
        </h4>
        <p class="text-sm">
          Progressive JavaScript framework for building modern web interfaces.
        </p>
      </div>
    </div>
  </DefineContent>
</template>
