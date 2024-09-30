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
      <NSwitch v-model:checked="loading" />
    </NFormGroup>

    <NFormGroup label="Night & Day">
      <NSwitch
        v-model:checked="nightOrDay"
        switch="primary"
        :loading
        size="lg"
        :una="{
          switchThumb: 'duration-500',
        }"
      >
        <template #icon="{ checked }">
          <NIcon v-if="loading" name="switch-loading-icon" class="switch-loading" />
          <Transition
            v-else
            class="switch-icon-base absolute transition-opacity-500"
            enter-active-class="delay-250"
            leave-to-class="opacity-0"
            enter-from-class="opacity-0"
          >
            <NIcon v-if="checked" name="i-radix-icons:moon" class="switch-icon-on" />
            <NIcon v-else name="i-radix-icons:sun" class="switch-icon-off" />
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
          switchIconBase: 'transition-transform duration-2500',
          switchIconOn: 'rotate-1270',
          switchIconOff: 'rotate-0',
        }"
      />
    </NFormGroup>
  </div>
</template>
