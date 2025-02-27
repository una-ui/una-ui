<template>
  <div class="mx-auto max-w-4xl w-full flex flex-col gap-4 md:flex-row">
    <!-- Free Plan Card -->
    <NCard
      title="Free Plan"
      description="Perfect for getting started"
      card="outline-gray"
      class="flex-1"
      :una="{
        cardContent: 'space-y-4',
        cardDescription: 'text-accent',
      }"
    >
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold">$0</span>
        <span class="text-sm text-muted">/month</span>
      </div>

      <ul class="space-y-2">
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Up to 3 projects</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Community support</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Basic analytics</span>
        </li>
      </ul>

      <NButton label="Get Started" btn="solid-black" class="w-full" />
    </NCard>

    <!-- Pro Plan Card -->
    <NCard
      title="Pro Plan"
      description="Best for professionals"
      card="soft-primary"
      class="flex-1 scale-105"
      :una="{
        cardContent: 'space-y-4',
        cardDescription: 'text-accent',
      }"
    >
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold">$29</span>
        <span class="text-sm text-accent">/month</span>
      </div>

      <ul class="space-y-2">
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Unlimited projects</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Priority support</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Advanced analytics</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Custom domains</span>
        </li>
      </ul>

      <NButton label="Get Started" btn="solid-primary" class="w-full" />
    </NCard>

    <!-- Enterprise Plan Card -->
    <NCard
      title="Enterprise"
      description="For large organizations"
      card="outline-gray"
      class="flex-1"
      :una="{
        cardContent: 'space-y-4',
        cardDescription: 'text-accent',
      }"
    >
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold">$99</span>
        <span class="text-sm text-muted">/month</span>
      </div>

      <ul class="space-y-2">
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Everything in Pro</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>24/7 Support</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>SLA guarantee</span>
        </li>
        <li class="flex items-center gap-2">
          <NIcon name="i-lucide-check" class="text-success" />
          <span>Custom integration</span>
        </li>
      </ul>

      <NButton label="Contact Sales" btn="solid-black" class="w-full" />
    </NCard>
  </div>
</template>
