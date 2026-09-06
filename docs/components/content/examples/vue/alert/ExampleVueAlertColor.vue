<script setup lang="ts">
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NAlert alert="text-gray" title="Text gray (default)" :description="description" />

    <NAlert alert="solid-primary" title="Solid primary" :description="description" />

    <NAlert alert="solid-white" title="Solid white" :description="description" />

    <NAlert alert="solid-black" title="Solid black" :description="description" />

    <NAlert alert="text-info" title="Text info" :description="description" />

    <NAlert alert="border-success" title="Success color" :description="description" />

    <NAlert alert="outline-warning" title="Warning color" :description="description" />

    <NAlert alert="border-error" title="Error color" :description="description" />

    <NAlert alert="soft-purple" title="Purple color" :description="description" />

    <NAlert alert="outline-lime" title="Lime color" :description="description" />

    <NAlert alert="border-pink" title="Pink color" :description="description" />

    <NAlert alert="outline-sky" title="Sky color" :description="description" />
  </div>
</template>
