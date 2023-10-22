<script setup lang="ts">
const notifications = ref([
  {
    label: 'On github',
    value: false,
    checkbox: 'gray',
  },
  {
    label: 'Email',
    value: false,
    checkbox: 'yellow',
  },
  {
    label: 'Discord',
    value: false,
    checkbox: 'indigo',
  },
])
</script>

<template>
  <div class="flex flex-col space-y-6">
    <!-- Vertical -->
    <NFormGroup
      :for="false"
      label="Participating, @mentions and custom"
      description="Notifications for the conversations you are participating in, or if someone cites you with an @mention. Also for all activity when subscribed to specific events."
    >
      <NCheckbox
        v-for="option in notifications"
        :key="option.label"
        v-model="option.value"
        :label="option.label"
        :checkbox="option.checkbox"
      />
    </NFormGroup>

    <hr class="border-base">

    <!-- Horizontal -->
    <NFormGroup
      :for="false"
      required
      message="You must choose at least one event"
      label="Participating, @mentions and custom"
      description="Notifications for the conversations you are participating in, or if someone cites you with an @mention. Also for all activity when subscribed to specific events."
    >
      <div class="flex flex-wrap gap-8">
        <NCheckbox
          v-for="option in notifications"
          :key="option.label"
          v-model="option.value"
          :label="option.label"
          :checkbox="option.checkbox"
        />
      </div>
    </NFormGroup>
  </div>
</template>
