<script setup lang="ts">
const selected = ref()
const items = ['Evan You', 'Anthony Fu', 'Daniel Roe', 'Pooya Parsa', 'Sébastien Chopin', 'Alexander Lichter']
</script>

<template>
  <div class="flex items-end">
    <NFormGroup
      label="Contributor"
      description="Select a contributor from the Vue community"
      :status="selected ? undefined : 'error'"
      :message="selected ? '' : 'This field is required'"
      required
    >
      <NSelect
        v-model="selected"
        placeholder="Options"
        :items
      />
    </NFormGroup>
  </div>
</template>
