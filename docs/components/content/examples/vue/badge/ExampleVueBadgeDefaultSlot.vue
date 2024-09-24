<script setup lang="ts">
const openSourser = [
  {
    name: 'Evan You',
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
  },
  {
    name: 'Anthony Fu',
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
  },
  {
    name: 'Daniel Roe',
    avatar: 'https://avatars.githubusercontent.com/u/28706372?v=4',
  },
  {
    name: 'Sébastien Chopin',
    avatar: 'https://avatars.githubusercontent.com/u/904724?v=4',
  },
  {
    name: 'Pooya Parsa',
    avatar: 'https://avatars.githubusercontent.com/u/5158436?v=4',
  },
  {
    name: 'Eduardo San Martin Morote',
    avatar: 'https://avatars.githubusercontent.com/u/664177?v=4',
  },
  {
    name: 'Guillaume Chau',
    avatar: 'https://avatars.githubusercontent.com/u/2798204?v=4',
  },
]

function close(name: string) {
  // eslint-disable-next-line no-alert
  alert(name)
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NBadge
      v-for="{ name, avatar } in openSourser"
      :key="name"
      badge="solid-black"
      closable
      @close="close(name)"
    >
      <!-- TODO convert to NAvatar soon -->
      <img
        class="h-5 rounded-full bg-base p-0.5px"
        :src="avatar"
      >

      {{ name }}
    </NBadge>
  </div>
</template>
