<script setup lang="ts">
const delay = ref(0)

/**
 * This if to prevent pre-rendering,
 * you can directly set the delay value to attribute.
 *
 * @example
 * :delay="1000 * 120"
 */
onMounted(() => {
  setTimeout(() => {
    delay.value = 1000 * 120
  }, 3000)
})
</script>

<template>
  <NAvatar
    src="/images/avatar.png"
    skeleton
    :delay="delay"
  />
</template>
