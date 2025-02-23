<template>
  <NAvatarGroup
    :max="2"
    avatar="solid-blue"
    :_avatar-fallback="{
      class: 'text-white',
    }"
  >
    <NAvatar label="AF" />
    <NAvatar label="DR" />
    <NAvatar label="PR" />
  </NAvatarGroup>
</template>
