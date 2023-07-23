<script setup lang="ts">
const loading = ref(true)

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
        :label="loading ? 'Leading...' : 'Leading'"
        @click="toggleLoading"
      />

      <NButton
        btn="soft-green"
        loading-placement="label"
        :loading="loading"
        :nv="{
          btnLoadingIcon: 'i-tabler-loader-3',
        }"
        label="Label Loading"
        @click="toggleLoading"
      />

      <NButton
        btn="solid-black"
        loading-placement="trailing"
        :loading="loading"
        :nv="{
          btnLoadingIcon: 'i-tabler-loader',
        }"
        :label="loading ? 'Trailing...' : 'Trailing'"
        @click="toggleLoading"
      />
    </div>

    <hr border="base">

    <div flex="~ col sm:row" gap-4>
      <NButton
        btn="solid-yellow"
        :loading="loading"
        :label="loading ? 'Downloading...' : 'Download'"
        leading="i-heroicons-cloud-arrow-down-20-solid"
        @click="toggleLoading"
      />

      <NButton
        btn="link-orange"
        loading-placement="label"
        :loading="loading"
        :nv="{
          btnLoadingIcon: 'i-heroicons-cloud-arrow-down-20-solid',
          btnLoadingBase: 'animate-pulse',
        }"
        icon
        label="i-tabler-download"
        @click="toggleLoading"
      />

      <NButton
        btn="solid-white"
        loading-placement="label"
        :loading="loading"
        :nv="{
          btnLoadingIcon: 'i-tabler-reload',
        }"
        label="Refresh"
        @click="toggleLoading"
      />
    </div>
  </div>
</template>
