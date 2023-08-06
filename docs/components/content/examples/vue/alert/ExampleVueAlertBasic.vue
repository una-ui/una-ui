<script setup lang="ts">
const alerts = {
  title: 'Attention needed',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
}
</script>

<template>
  <div flex="~ col" space-y-4>
    <NAlert alert="soft-info" icon="info" v-bind="alerts" />

    <NAlert alert="soft-success" icon="success" v-bind="alerts" />

    <NAlert alert="soft-warning" icon="warning" v-bind="alerts" />

    <NAlert alert="soft-error" icon="error" v-bind="alerts" />

    <NAlert alert="outline-info" icon="info" v-bind="alerts" />

    <NAlert alert="outline-success" icon="success" v-bind="alerts" />

    <NAlert alert="outline-warning" icon="warning" v-bind="alerts" />

    <NAlert alert="outline-error" icon="error" v-bind="alerts" />
  </div>
</template>
