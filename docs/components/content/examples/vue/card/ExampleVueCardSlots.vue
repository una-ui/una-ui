<template>
  <div
    class="grid w-full place-items-center"
  >
    <NCard
      class="w-380px overflow-hidden"
      :_card-header="{
        class: 'p-0',
      }"
      :_card-content="{
        class: 'mt-4',
      }"
    >
      <template #header>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1700527736181-67795948c0b1?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card image"
            class="h-56 w-full object-cover"
          >
          <div class="absolute inset-0 from-black/60 to-transparent bg-gradient-to-t" />
          <div class="absolute bottom-0 left-0 p-4">
            <div class="flex items-center gap-2">
              <NAvatar
                src="https://i.pravatar.cc/300"
                alt="John Doe"
                size="sm"
                class="ring-2 ring-white"
              />
              <div class="text-white">
                <p class="font-medium leading-none">
                  John Doe
                </p>
                <p class="text-sm text-white/80">
                  @johndoe
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- content -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 text-sm text-muted">
          <div class="flex items-center gap-1">
            <NIcon name="i-lucide-users" class="text-primary" />
            <span>2.4k followers</span>
          </div>
          <div class="flex items-center gap-1">
            <NIcon name="i-lucide-map-pin" class="text-error" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <p class="text-sm">
          Full-stack developer passionate about building beautiful user interfaces and scalable applications. Always learning and sharing knowledge with the community.
        </p>
      </div>

      <template #footer>
        <div class="w-full flex flex-col">
          <div class="mt-2 w-full flex items-center justify-between gap-4">
            <NButton
              btn="solid"
              leading="i-lucide-user-plus"
              label="Follow"
              class="flex-1"
            />
            <NButton
              btn="outline-gray"
              leading="i-lucide-mail"
              label="Message"
              class="flex-1"
            />
          </div>
        </div>
      </template>
    </NCard>
  </div>
</template>
