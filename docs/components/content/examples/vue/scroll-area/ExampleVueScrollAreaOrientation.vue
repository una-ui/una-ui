<script setup lang="ts">
const imgs = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ffa3dtMr6u_9dfm50puWGJDMl4inTCzpng&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFl1EGGTeZgepydO2HYm3BUUCVJKxEU_EvRbuY-kLp7xLYsNYBmk-omDWmaatQ0V5aU4&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpZ9V95pg5BCHBWYAmjgfx82ungI6UIGWcoa8z3wzIhi8lhgyvssZPAiqYvCAzobo4jI&usqp=CAU',
] as const
</script>

<template>
  <div class="grid w-full place-items-center">
    <NScrollArea orientation="horizontal" class="h-72 w-96 border rounded-md">
      <div class="w-max flex p-4 space-x-4">
        <div v-for="img, idx in imgs" :key="idx">
          <figure class="shrink-0">
            <div class="overflow-hidden rounded-md">
              <img
                :src="img"
                class="aspect-3/4 h-64 w-36 object-cover"
              >
            </div>
          </figure>
        </div>
      </div>
    </NScrollArea>
  </div>
</template>
