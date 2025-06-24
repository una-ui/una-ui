<script setup lang="ts">
const value = ref<string[]>([])

function handleComplete(e: string[]) {
  alert(e.join(''))
}
</script>

<template>
  <NPinInput v-model="value" placeholder="○" @complete="handleComplete">
    <NPinInputGroup>
      <template v-for="index in 6" :key="index">
        <NPinInputSlot :index="index - 1" />
        <NPinInputSeparator v-if="index !== 6" separator="i-lucide-minus" />
      </template>
    </NPinInputGroup>
  </NPinInput>
</template>
