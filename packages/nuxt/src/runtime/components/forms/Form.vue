<script setup lang="ts">
function submitForm() {
  // console.log('submitForm')
}

// TO PASS TO CHILDREN Automatically
// refs for inputs (dynamically)
</script>

<template>
  <form flex="~ col" space-y-5 @submit.prevent="submitForm()">
    <slot />
  </form>
</template>
