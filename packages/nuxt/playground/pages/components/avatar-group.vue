<script setup lang="ts">
const avatars = [
  { src: 'https://avatars.githubusercontent.com/u/11247099?v=4', alt: 'Anthony Fu' },
  { src: 'https://avatars.githubusercontent.com/u/28706372?v=4', alt: 'Daniel Roe' },
  { src: 'https://avatars.githubusercontent.com/u/5158436?v=4', alt: 'Pooya Parsa' },
  { src: 'https://avatars.githubusercontent.com/u/499550?v=4', alt: 'Evan You' },
  { src: 'https://avatars.githubusercontent.com/u/640208?v=4', alt: 'Alexander Lichter' },
  { src: 'https://avatars.githubusercontent.com/u/664177?v=4', alt: 'Eduardo San Martin Morote' },
  { src: '/images/avatar.png', alt: 'Phojie Rengel' },
  { src: '/images/avatar.png', alt: 'Phojie Rengel' },
  { src: '/images/avatar.png', alt: 'Phojie Rengel' },
  { src: '/images/avatar.png', alt: 'Phojie Rengel' },
  { src: '/images/avatar.png', alt: 'Phojie Rengel' },
  { src: '/images/avatar.png', alt: 'Phojie Rengel' },
]
</script>

<template>
  <NAvatarGroup
    :max="5"
    size="xl"
  >
    <NAvatar
      v-for="(avatar, index) in avatars"
      :key="index"
      :src="avatar.src"
      :alt="avatar.alt"
    />
  </NAvatarGroup>
</template>
