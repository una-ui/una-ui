<script setup lang="ts">
import { ThemeColors } from "~/../packages/un-preset/types";

const themes = (await import("~/../packages/un-preset/themes.json").then(
  (r) => r.default
)) as [string, ThemeColors][];
</script>

<template>
  <div class="grid grid-cols-12 gap-2">
    <div v-for="[key, theme] in themes" :key="key" class="grid col-span-2">
      <div
        v-for="(color, i) in theme"
        :key="i"
        class="grid col-span-12 grow"
        :style="`background-color:rgb(${color})`"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>
