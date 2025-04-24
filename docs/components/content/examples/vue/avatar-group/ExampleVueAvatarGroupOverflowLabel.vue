<script setup lang="ts">
const avatarsCount = 8
const maxVisibleCount = 2
</script>

<template>
  <NAvatarGroup
    :max="maxVisibleCount"
    :overflow-label="`+${avatarsCount - maxVisibleCount}`"
  >
    <NAvatar src="https://avatars.githubusercontent.com/u/11247099?v=4" alt="Anthony Fu" />
    <NAvatar src="https://avatars.githubusercontent.com/u/28706372?v=4" alt="Daniel Roe" />
    <NAvatar src="https://avatars.githubusercontent.com/u/5158436?v=4" alt="Pooya Parsa" />
    <NAvatar src="https://avatars.githubusercontent.com/u/499550?v=4" alt="Evan You" />
    <NAvatar src="https://avatars.githubusercontent.com/u/640208?v=4" alt="Alexander Lichter" />
    <NAvatar src="https://avatars.githubusercontent.com/u/664177?v=4" alt="Eduardo San Martin Morote" />
    <NAvatar src="/images/avatar.png" alt="Phojie Rengel" />
  </NAvatarGroup>
</template>
