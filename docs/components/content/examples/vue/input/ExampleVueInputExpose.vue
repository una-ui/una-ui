<script setup lang="ts">
const input = useTemplateRef('input')

function focus() {
  input.value?.inputRef?.focus()
}

function select() {
  input.value?.inputRef?.select()
}

function blur() {
  input.value?.inputRef?.blur()
}

function inputRef() {
  console.log(input.value?.inputRef)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2">
      <NButton
        size="xs"
        btn="soft-gray"
        @click="focus"
      >
        Focus
      </NButton>
      <NButton
        size="xs"
        btn="soft-gray"
        @click="blur"
      >
        Blur
      </NButton>
      <NButton
        size="xs"
        btn="soft-gray" @click="select"
      >
        Select
      </NButton>
      <NButton
        size="xs"
        btn="soft-gray"
        @click="inputRef"
      >
        Input Ref
      </NButton>
    </div>

    <NInput
      ref="input"
      placeholder="Click buttons to trigger methods"
      input="outline-black"
    />
  </div>
</template>
