<script setup lang="ts">
const components: { title: string, to: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    to: '#docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    to: '#docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    to: '#docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    to: '#docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    to: '#docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    to: '#docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>
  <div class="flex items-center justify-center p-2">
    <NNavigationMenu>
      <NNavigationMenuList>
        <NNavigationMenuIndicator />
        <NNavigationMenuItem>
          <NNavigationMenuTrigger>Getting started</NNavigationMenuTrigger>
          <NNavigationMenuContent>
            <ul class="grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]">
              <li class="row-span-3">
                <NNavigationMenuLink
                  as-child
                >
                  <NLink
                    class="h-full w-full flex flex-col select-none justify-end rounded-md from-foreground/10 to-foreground/0 bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    to="#"
                  >
                    <img src="https://www.reka-ui.com/logo.svg" class="h-6 w-6">
                    <div class="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui test
                    </div>
                    <p class="text-sm text-muted leading-tight">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </NLink>
                </NNavigationMenuLink>
              </li>
              <li>
                <NNavigationMenuLink as-child>
                  <NLink
                    to="#/docs/introduction"
                    class="block select-none rounded-md focus:bg-accent hover:bg-accent p-3 focus:text-accent hover:text-accent leading-none no-underline outline-none transition-colors space-y-1"
                  >
                    <div class="text-sm font-medium leading-none">
                      Introduction
                    </div>
                    <p class="line-clamp-2 text-sm text-muted leading-snug">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </NLink>
                </NNavigationMenuLink>
              </li>
              <li>
                <NNavigationMenuLink as-child>
                  <NLink
                    to="#/docs/installation"
                    class="block select-none rounded-md focus:bg-accent hover:bg-accent p-3 focus:text-accent hover:text-accent leading-none no-underline outline-none transition-colors space-y-1"
                  >
                    <div class="text-sm font-medium leading-none">
                      Installation
                    </div>
                    <p class="line-clamp-2 text-sm text-muted leading-snug">
                      How to install dependencies and structure your app.
                    </p>
                  </NLink>
                </NNavigationMenuLink>
              </li>
              <li>
                <NNavigationMenuLink as-child>
                  <NLink
                    to="#/docs/typography"
                    class="block select-none rounded-md focus:bg-accent hover:bg-accent p-3 focus:text-accent hover:text-accent leading-none no-underline outline-none transition-colors space-y-1"
                  >
                    <div class="text-sm font-medium leading-none">
                      Typography
                    </div>
                    <p class="line-clamp-2 text-sm text-muted leading-snug">
                      Styles for headings, paragraphs, lists...etc
                    </p>
                  </NLink>
                </NNavigationMenuLink>
              </li>
            </ul>
          </NNavigationMenuContent>
        </NNavigationMenuItem>
        <NNavigationMenuItem>
          <NNavigationMenuTrigger>Components</NNavigationMenuTrigger>
          <NNavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]">
              <li v-for="component in components" :key="component.title">
                <NNavigationMenuLink as-child>
                  <a
                    :to="component.to"
                    class="block select-none rounded-md focus:bg-accent hover:bg-accent p-3 focus:text-accent hover:text-accent leading-none no-underline outline-none transition-colors space-y-1"
                  >
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                    <p class="line-clamp-2 text-sm text-muted leading-snug">
                      {{ component.description }}
                    </p>
                  </a>
                </NNavigationMenuLink>
              </li>
            </ul>
          </NNavigationMenuContent>
        </NNavigationMenuItem>
        <NNavigationMenuItem>
          <NNavigationMenuLink to="#/docs/introduction">
            Documentation
          </NNavigationMenuLink>
        </NNavigationMenuItem>
      </NNavigationMenuList>
    </NNavigationMenu>
  </div>
</template>
