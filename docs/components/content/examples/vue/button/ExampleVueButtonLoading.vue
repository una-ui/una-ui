<script setup lang="ts">
const loading = ref(false)

function toggleLoading() {
  loading.value = !loading.value
}
</script>

<template>
  <div flex="~ col" gap-4>
    <div>
      <NButton
        btn="solid-gray"
        :label="`Turn loading${loading ? ' off' : ' on'}`"
        @click="toggleLoading"
      />
    </div>

    <hr border="base">

    <div flex="~ col sm:row" gap-4>
      <NButton
        :loading="loading"
        :label="loading ? 'Loading...' : 'Leading'"
      />

      <NButton
        btn="soft"
        loading-placement="label"
        :loading="loading"
        :nv="{
          btnLoadingIcon: 'i-tabler-loader-3',
        }"
        label="Label Loading"
      />

      <NButton
        btn="solid-black"
        loading-placement="trailing"
        :loading="loading"
        :nv="{
          btnLoadingIcon: 'i-tabler-loader',
        }"
        :label="loading ? 'Loading...' : 'Trailing'"
      />
    </div>
  </div>
</template>
