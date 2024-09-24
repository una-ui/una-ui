<template>
  <div class="flex items-center gap-4">
    <NAvatar label="PR">
      <template #default="props">
        <span>{{ props.label }}</span>
      </template>
    </NAvatar>

    <NAvatar src="/images/avatar.png" alt="Phojie Rengel">
      <template #default="slot">
        <!-- if ready -->
        <img v-if="slot.isReady && !slot.error" :src="slot.src" :alt="slot.alt">

        <!-- if loading -->
        <span v-else-if="slot.isLoading">loading</span>

        <!-- fallbacks -->
        <span v-else-if="slot.error">error</span>
      </template>
    </NAvatar>
  </div>
</template>
