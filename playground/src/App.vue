<script setup lang="ts">
import Buttons from './components/Buttons.vue'
import Colors from './components/Colors.vue'
import ToggleDark from './components/ToggleDark.vue'
import Inputs from './components/Inputs.vue'
</script>

<template>
  <div class="container py-25 space-y-8 mx-auto">
    <ToggleDark />

    <Buttons />

    <Inputs />

    <Colors />
  </div>
</template>
