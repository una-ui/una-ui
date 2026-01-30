<template>
  <div class="grid h-28 place-items-center">
    <NHoverCard>
      <NHoverCardTrigger as-child>
        <NButton btn="link-black">
          @nuxt
        </NButton>
      </NHoverCardTrigger>
      <NHoverCardContent class="w-80" side="right">
        <div class="flex justify-between gap-4">
          <NAvatar
            src="https://github.com/nuxt.png"
            alt="Vercel"
            label="VC"
          />
          <div class="flex flex-col gap-1">
            <h4 class="text-sm font-semibold">
              @nuxt
            </h4>
            <p class="text-sm">
              The Intuitive Vue Framework - created and maintained by @nuxt.
            </p>
            <div class="mt-1 flex items-center gap-2">
              <NIcon
                name="i-lucide-calendar"
                class="text-muted-foreground"
              />
              <span class="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </NHoverCardContent>
    </NHoverCard>
  </div>
</template>
