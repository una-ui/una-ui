<script setup lang="ts">
import Colors from './components/Colors.vue'
import ToggleDark from './components/ToggleDark.vue'
</script>

<template>
  <div class="divide-y container py-25 space-y-4 mx-auto bg-tomato-10">
    <ToggleDark />

    <Colors />
  </div>
</template>
