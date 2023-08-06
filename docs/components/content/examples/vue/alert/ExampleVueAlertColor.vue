<script setup lang="ts">
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
</script>

<template>
  <div flex="~ col" space-y-4>
    <NAlert alert="outline-info" title="Info color" :description="description" />

    <NAlert alert="border-success" title="Success color" :description="description" />

    <NAlert alert="outline-warning" title="Warning color" :description="description" />

    <NAlert alert="border-error" title="Error color" :description="description" />

    <NAlert alert="soft-purple" title="Purple color" :description="description" />

    <NAlert alert="outline-lime" title="Lime color" :description="description" />

    <NAlert alert="border-pink" title="Pink color" :description="description" />

    <NAlert alert="outline-sky" title="Sky color" :description="description" />
  </div>
</template>
