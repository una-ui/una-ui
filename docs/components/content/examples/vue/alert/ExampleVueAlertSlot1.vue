<template>
  <NAlert
    alert="outline-info"
    icon
    :nv="{
      alertInnerWrapper: 'items-center',
    }"
  >
    <template #title>
      <div class="flex-1 items-center md:flex md:justify-between space-y-3 md:space-y-0">
        <p class="text-brand">
          Notification settings off. Stay informed with important updates.
        </p>
        <NButton
          btn="soft-info"
          to="#"
          size="xs"
          class="md:ml-4"
          leading="i-heroicons-bell-alert-20-solid"
        >
          Turn on
        </NButton>
      </div>
    </template>
  </NAlert>
</template>
