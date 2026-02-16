<script setup lang="ts">
// Example 1: Multiple select with object items (label/value)
const selectedContributors = ref<string[]>([])
const contributors = [
  {
    label: 'Evan You',
    value: 'evan-you',
  },
  {
    label: 'Anthony Fu',
    value: 'anthony-fu',
  },
  {
    label: 'Daniel Roe',
    value: 'daniel-roe',
  },
  {
    label: 'Pooya Parsa',
    value: 'pooya-parsa',
  },
  {
    label: 'Sébastien Chopin',
    value: 'sebastien-chopin',
  },
  {
    label: 'Alexander Lichter',
    value: 'alexander-lichter',
  },
]

// Example 2: Single select with primitive strings
const selectedFramework = ref<string>()
const frameworks = ['Vue', 'React', 'Angular', 'Svelte', 'Solid']
</script>

<template>
  <div class="space-y-8">
    <!-- Example 1: Multiple select with objects -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">
        Example 1: Multiple Select with Objects
      </h3>
      <div class="max-w-80">
        <NSelect
          v-model="selectedContributors"
          :items="contributors"
          multiple
          placeholder="Select Contributors"
          label="Vue Community"
        />
      </div>
      <div class="text-sm text-muted">
        Selected values: <span class="font-mono">{{ selectedContributors }}</span>
      </div>
    </div>

    <!-- Example 2: Single select with primitives -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">
        Example 2: Single Select with Primitives
      </h3>
      <div class="max-w-80">
        <NSelect
          v-model="selectedFramework"
          :items="frameworks"
          placeholder="Select Framework"
          label="JavaScript Frameworks"
        />
      </div>
      <div class="text-sm text-muted">
        Selected value: <span class="font-mono">{{ selectedFramework || 'none' }}</span>
      </div>
    </div>
  </div>
</template>
