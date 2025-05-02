<script setup lang="ts">
function click(description: string) {
  alert(description)
}

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="grid cols-1 gap-4 sm:cols-2">
    <NInput
      :type="isPasswordVisible ? 'text' : 'password'"
      :trailing="isPasswordVisible ? 'i-lucide-eye' : 'i-lucide-eye-off'"
      :una="{
        inputTrailing: 'pointer-events-auto cursor-pointer',
      }"
      model-value="Password"
      @trailing="isPasswordVisible = !isPasswordVisible"
    />

    <NInput
      input="outline-purple"
      leading="i-tabler-thumb-up-filled"
      trailing="i-tabler-thumb-down-filled"
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
