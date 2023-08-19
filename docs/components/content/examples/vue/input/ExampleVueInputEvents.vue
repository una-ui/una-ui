<script setup lang="ts">
function click(description: string) {
  // eslint-disable-next-line no-alert
  alert(description)
}

const isPasswordVisible = ref(false)
</script>

<template>
  <div grid="~ cols-1 sm:cols-2" gap-4>
    <NInput
      :type="isPasswordVisible ? 'text' : 'password'"
      :trailing="isPasswordVisible ? 'i-heroicons-eye-20-solid' : 'i-heroicons-eye-slash-20-solid'"
      :una="{
        inputTrailing: 'pointer-events-auto cursor-pointer',
      }"
      model-value="Password"
      @trailing="isPasswordVisible = !isPasswordVisible"
    />

    <NInput
      input="outline-purple"
      leading="i-heroicons-hand-thumb-up-20-solid"
      trailing="i-heroicons-arrow-down-tray-20-solid "
      :una="{
        inputLeading: 'active:scale-120 text-blue pointer-events-auto cursor-pointer active:text-green',
        inputTrailing: 'active:scale-90 text-yellow pointer-events-auto cursor-pointer active:text-lime',
      }"
      placeholder="Leading and trailing icons are clickable"
      @leading="click('leading icon is clicked')"
      @trailing="click('trailing icon is clicked')"
    />
  </div>
</template>
