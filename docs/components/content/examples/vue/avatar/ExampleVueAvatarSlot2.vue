<template>
  <div flex="~ items-center" gap-4>
    <NAvatar label="PR">
      <template #default="props">
        <span>{{ props.label }}</span>
      </template>
    </NAvatar>

    <NAvatar src="/images/avatar.png" alt="Phojie Rengel">
      <template #default="slot">
        <img :src="slot.src" :alt="slot.alt">

        <!-- fallbacks -->
        <span v-if="slot.error">error</span>
      </template>
    </NAvatar>
  </div>
</template>
