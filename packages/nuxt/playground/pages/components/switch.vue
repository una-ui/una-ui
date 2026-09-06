<script setup lang="ts">
const loading = ref(false)

const nightOrDay = ref(false)

useIntervalFn(() => {
  nightOrDay.value = !nightOrDay.value
}, 1000)
</script>

<template>
  <div flex gap="8">
    <NFormGroup label="Loading">
      <NSwitch v-model="loading" />
    </NFormGroup>

    <NFormGroup label="Night & Day">
      <NSwitch
        v-model="nightOrDay"
        :loading
        :una="{
          switchThumb: 'duration-500',
        }"
      >
        <template #icon>
          <NIcon v-if="loading" name="switch-loading-icon" class="switch-loading" />
          <Transition
            v-else
            class="absolute switch-icon transition-opacity-500"
            enter-active-class="delay-250"
            leave-to-class="opacity-0"
            enter-from-class="opacity-0"
          >
            <NIcon v-if="nightOrDay" name="i-radix-icons:moon" class="switch-icon-checked" />
            <NIcon v-else name="i-radix-icons:sun" class="switch-icon-unchecked" />
          </Transition>
        </template>
      </NSwitch>
    </NFormGroup>

    <NFormGroup label="Fidget">
      <NSwitch
        :loading
        icon="i-tabler:fidget-spinner"
        :una="{
          switchThumb: 'duration-500',
          switchIcon: 'transition-transform duration-2500',
          switchIconChecked: 'rotate-1270',
          switchIconUnchecked: 'rotate-0',
        }"
      />
    </NFormGroup>
  </div>
</template>
