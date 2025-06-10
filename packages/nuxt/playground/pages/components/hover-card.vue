<script setup lang="ts">
const [DefineContent, ReuseContent] = createReusableTemplate()
</script>

<template>
  <div class="flex items-center space-x-8">
    <NHoverCard arrow>
      <template #trigger>
        <NAvatar src="https://github.com/vuejs.png" class="cursor-pointer" />
      </template>
      <template #content>
        <ReuseContent />
      </template>
    </NHoverCard>
    <NHoverCard hovercard="soft-primary" arrow>
      <template #trigger>
        <NButton btn="soft-primary" class="cursor-pointer">
          With color
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
        <div class="flex items-center pt-2">
          <span class="text-sm text-muted">
            Joined January 2014
          </span>
        </div>
      </div>
    </div>
  </DefineContent>
</template>
