<script setup lang="ts">
const goal = ref(350)

const directions = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <NDrawer>
      <NDrawerTrigger as-child>
        <NButton btn="outline-gray">
          Open Drawer
        </NButton>
      </NDrawerTrigger>
      <NDrawerContent>
        <div class="mx-auto max-w-sm w-full">
          <NDrawerHeader>
            <NDrawerTitle>Move Goal</NDrawerTitle>
            <NDrawerDescription>Set your daily activity goal.</NDrawerDescription>
          </NDrawerHeader>
          <div class="p-4 pb-0">
            <div class="flex items-center justify-center space-x-2">
              <NButton
                btn="outline-gray"
                square="8"
                icon
                label="i-lucide-minus"
                rounded="full"
                :disabled="goal <= 200"
                @click="goal -= 10"
              />
              <div class="flex-1 text-center">
                <div class="text-7xl font-bold tracking-tighter">
                  {{ goal }}
                </div>
                <div class="text-[0.70rem] text-muted-foreground uppercase">
                  Calories/day
                </div>
              </div>
              <NButton
                btn="outline-gray"
                square="8"
                icon
                label="i-lucide-plus"
                rounded="full"
                :disabled="goal >= 400"
                @click="goal += 10"
              />
            </div>
            <div class="mt-3 h-[120px] border rounded" />
          </div>
          <NDrawerFooter>
            <NButton>Submit</NButton>
            <NDrawerClose as-child>
              <NButton btn="outline-gray">
                Cancel
              </NButton>
            </NDrawerClose>
          </NDrawerFooter>
        </div>
      </NDrawerContent>
    </NDrawer>

    <NDrawer direction="right">
      <NDrawerTrigger as-child>
        <NButton btn="outline-gray">
          Scrollable Content
        </NButton>
      </NDrawerTrigger>
      <NDrawerContent>
        <NDrawerHeader>
          <NDrawerTitle>Move Goal</NDrawerTitle>
          <NDrawerDescription>Set your daily activity goal.</NDrawerDescription>
        </NDrawerHeader>
        <div class="overflow-y-auto px-4 text-sm">
          <h4 class="mb-4 text-lg font-medium leading-none">
            Lorem Ipsum
          </h4>
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <NDrawerFooter>
          <NButton>Submit</NButton>
          <NDrawerClose as-child>
            <NButton btn="outline-gray">
              Cancel
            </NButton>
          </NDrawerClose>
        </NDrawerFooter>
      </NDrawerContent>
    </NDrawer>

    <NDrawer v-for="direction in directions" :key="direction" :direction>
      <NDrawerTrigger as-child>
        <NButton btn="outline-gray" class="capitalize">
          {{ direction }}
        </NButton>
      </NDrawerTrigger>
      <NDrawerContent>
        <NDrawerHeader>
          <NDrawerTitle>Move Goal</NDrawerTitle>
          <NDrawerDescription>
            Set your daily activity goal.
          </NDrawerDescription>
        </NDrawerHeader>
        <div class="overflow-y-auto px-4 text-sm">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <NDrawerFooter>
          <NButton>Submit</NButton>
          <NDrawerClose as-child>
            <NButton btn="outline-gray">
              Cancel
            </NButton>
          </NDrawerClose>
        </NDrawerFooter>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>
