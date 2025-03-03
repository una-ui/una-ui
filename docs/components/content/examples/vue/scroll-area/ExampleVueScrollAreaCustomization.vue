<template>
  <div class="w-full flex justify-center">
    <div class="max-w-md w-full">
      <NScrollArea
        type="hover"
        rounded="lg"
        class="h-600px border rounded-lg p-4"
        :una="{
          scrollAreaScrollbar: 'bg-gray-100/50 hover:bg-gray-200/70 dark:bg-gray-800/30 dark:hover:bg-gray-700/50',
          scrollAreaThumb: 'bg-primary-500/70 hover:bg-primary-600 dark:bg-primary-400/70 dark:hover:bg-primary-400 rounded-full',
        }"
      >
        <div class="space-y-8">
          <!-- Header -->
          <div>
            <h3 class="text-2xl text-foreground font-bold">
              Accessible Scrolling
            </h3>
            <p class="mt-2 text-accent">
              Cross-browser consistent scrollbars that work on all devices with keyboard navigation and screen reader support.
            </p>
          </div>

          <!-- Display modes -->
          <div class="border rounded-md bg-muted p-4">
            <h4 class="mb-3 text-sm text-accent font-semibold">
              Display Modes
            </h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <div class="mr-3 mt-2 h-3 w-3 rounded-full bg-primary" />
                <div>
                  <span class="text-xs text-accent font-medium">hover</span>
                  <p class="text-xs text-muted">
                    Shows scrollbars when hovering over the scroll area
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="mr-3 mt-2 h-3 w-3 rounded-full bg-primary" />
                <div>
                  <span class="text-xs text-accent font-medium">always</span>
                  <p class="text-xs text-muted">
                    Always shows scrollbars regardless of interaction
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="mr-3 mt-2 h-3 w-3 rounded-full bg-primary" />
                <div>
                  <span class="text-xs text-accent font-medium">scroll</span>
                  <p class="text-xs text-muted">
                    Shows scrollbars during scrolling and hides after
                  </p>
                </div>
              </div>
            </div>
          </div>

          <NSeparator />

          <!-- Use cases -->
          <div>
            <h4 class="mb-3 text-sm text-accent font-semibold">
              Common Use Cases
            </h4>
            <div class="grid grid-cols-2 gap-3">
              <div class="border rounded-lg bg-muted p-3">
                <div class="mb-2 h-6 w-6 flex items-center justify-center border rounded bg-white">
                  <div class="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h5 class="mb-1 text-xs text-accent font-medium">
                  Content panels
                </h5>
                <p class="text-xs text-muted">
                  For dashboards, chat interfaces, and document viewers
                </p>
              </div>
              <div class="border rounded-lg bg-muted p-3">
                <div class="mb-2 h-6 w-6 flex items-center justify-center border rounded bg-white">
                  <div class="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h5 class="mb-1 text-xs text-accent font-medium">
                  Long forms
                </h5>
                <p class="text-xs text-muted">
                  For registration flows, surveys, and user settings
                </p>
              </div>
              <div class="border rounded-lg bg-muted p-3">
                <div class="mb-2 h-6 w-6 flex items-center justify-center border rounded bg-white">
                  <div class="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h5 class="mb-1 text-xs text-accent font-medium">
                  Code blocks
                </h5>
                <p class="text-xs text-muted">
                  For documentation, code editors, and technical content
                </p>
              </div>
              <div class="border rounded-lg bg-muted p-3">
                <div class="mb-2 h-6 w-6 flex items-center justify-center border rounded bg-white">
                  <div class="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h5 class="mb-1 text-xs text-accent font-medium">
                  Media galleries
                </h5>
                <p class="text-xs text-muted">
                  For image collections, video libraries, and portfolios
                </p>
              </div>
            </div>
          </div>
        </div>
      </NScrollArea>
    </div>
  </div>
</template>
