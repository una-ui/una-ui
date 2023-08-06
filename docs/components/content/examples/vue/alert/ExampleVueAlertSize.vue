<script setup lang="ts">
const alerts = {
  title: 'Attention needed',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
  icon: true,
}
</script>

<template>
  <div flex="~ col" space-y-4>
    <NAlert size="xs" alert="outline-info" v-bind="alerts" />

    <NAlert size="sm" alert="outline-success" v-bind="alerts" />

    <NAlert size="24px" alert="outline-warning" v-bind="alerts" />

    <NAlert size="2rem" alert="outline-error" v-bind="alerts" />
  </div>
</template>
