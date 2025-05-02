<script setup lang="ts">
'use client'

const goal = ref(350)
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <NDrawer>
      <NDrawerTrigger as-child>
        <NButton btn="solid-gray">
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
                btn="solid-gray"
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
                <div class="text-[0.70rem] text-muted uppercase">
                  Calories/day
                </div>
              </div>
              <NButton
                btn="solid-gray"
                square="8"
                icon
                label="i-lucide-plus"
                rounded="full"
                :disabled="goal >= 400"
                @click="goal += 10"
              />
            </div>
            <div class="mt-3 h-[120px]">
              <!-- <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer> -->
            </div>
          </div>
          <NDrawerFooter>
            <NButton>Submit</NButton>
            <NDrawerClose as-child>
              <NButton btn="solid-gray">
                Cancel
              </NButton>
            </NDrawerClose>
          </NDrawerFooter>
        </div>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>
