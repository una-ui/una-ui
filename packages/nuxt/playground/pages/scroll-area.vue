<script setup lang="ts">
const tags = Array.from({ length: 50 }, (_, i) => 50 - i)

const custom = tags.slice(0, 10)

const works = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ffa3dtMr6u_9dfm50puWGJDMl4inTCzpng&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFl1EGGTeZgepydO2HYm3BUUCVJKxEU_EvRbuY-kLp7xLYsNYBmk-omDWmaatQ0V5aU4&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpZ9V95pg5BCHBWYAmjgfx82ungI6UIGWcoa8z3wzIhi8lhgyvssZPAiqYvCAzobo4jI&usqp=CAU',
] as const

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ section, data }">
    <NScrollArea class="border rounded-md">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">
          {{ section }}
        </h4>
        <div v-for="el in data" :key="el">
          <div class="text-sm">
            {{ el }}
          </div>
          <NSeparator v-if="el !== data[data.length - 1]" class="my-2" />
        </div>
      </div>
    </NScrollArea>
  </DefineTemplate>
  <div class="flex flex-col space-y-4">
    <div class="flex items-stretch space-x-4">
      <ReuseTemplate :data="tags" section="Tags" class="h-72 w-34" />
      <NScrollArea orientation="horizontal" class="w-96 whitespace-nowrap border rounded-md">
        <div class="w-max flex p-4 space-x-4">
          <div v-for="artwork, idx in works" :key="idx">
            <figure class="shrink-0">
              <div class="overflow-hidden rounded-md">
                <img
                  :src="artwork"
                  class="aspect-[3/4] h-64 w-36 object-cover"
                >
              </div>
            </figure>
          </div>
        </div>
      </NScrollArea>
    </div>
    <ReuseTemplate
      :data="custom"
      :_scroll-area-scrollbar="{
        una: {
          scrollAreaThumb: 'bg-primary/50',
        //   scrollAreaScrollbar: 'bg-primary/10',
        },
      }"
      :una="{
        scrollAreaScrollbar: 'bg-primary/10',
      }"
      section="Custom Variant"
      class="h-44 w-full"
    />
  </div>
</template>
