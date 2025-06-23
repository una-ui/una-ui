<template>
  <div class="grid max-w-xl items-start gap-4">
    <NAlert alert="border-success" icon>
      <template #title>
        Payment completed
      </template>
      <template #description>
        <div class="text-sm text-success-700 dark:text-success-200">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
        </div>
        <div class="mt-4">
          <div class="flex -mx-2.5 -my-1.5">
            <NButton leading="i-heroicons-document-text-20-solid" btn="ghost-success">
              View receipt
            </NButton>
            <NButton btn="ghost-success">
              Dismiss
            </NButton>
          </div>
        </div>
      </template>
    </NAlert>

    <NAlert
      alert="text-gray"
      title="This is a title"
      description="This is a description"
    />

    <NAlert
      alert="solid-amber"
      icon="i-lucide-popcorn"
      title="Let's try one with icon and title."
      description="This is a very long alert description that demonstrates how the
        component handles extended text content and potentially wraps across
        multiple lines"
    />

    <NAlert alert="border-lime">
      <NIcon name="i-lucide-shield-alert" />
      <NAlertTitle>
        This is a very long alert title that demonstrates how the component
        handles extended text content and potentially wraps across multiple
        lines
      </NAlertTitle>

      <NAlertDescription>
        This is a very long alert description that demonstrates how the
        component handles extended text content and potentially wraps across
        multiple lines
      </NAlertDescription>
    </NAlert>

    <NAlert alert="soft-info">
      <NIcon name="i-lucide-gift" />
      <NAlertDescription>
        This is a very long alert description that demonstrates how the
        component handles extended text content and potentially wraps across
        multiple lines
      </NAlertDescription>
    </NAlert>

    <NAlert
      alert="outline-orange"
      icon="i-lucide-circle-alert"
      title="This is an extremely long alert title that spans multiple lines to demonstrate how the component handles very lengthy headings while maintaining readability and proper text wrapping behavior"
      description="This is an equally long description that contains detailed information about the alert. It shows how the component can accommodate extensive content while preserving proper spacing, alignment, and readability across different screen sizes and viewport widths. This helps ensure the user experience remains consistent regardless of the content length."
    />

    <NAlert
      alert="text-error"
      icon="i-lucide-circle-alert"
      title="Something went wrong!"
      description="Your session has expired. Please log in again."
    />

    <NAlert
      alert="text-error"
      icon="i-lucide-circle-alert"
      title="Unable to process your payment."
    >
      <template #description>
        <p>Please verify your billing information and try again.</p>
        <ul class="list-disc list-inside text-sm">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </template>
    </NAlert>

    <NAlert
      alert="solid-gray"
      icon="i-lucide-circle-check"
      title="The selected emails have been marked as spam."
    >
      <template #action>
        <div class="mt-4">
          <div class="flex -mx-2.5 -my-1.5">
            <NButton leading="i-heroicons-document-text-20-solid" btn="ghost-success" class="text-success-800 dark:text-success-100">
              View receipt
            </NButton>
            <NButton btn="ghost-success" class="text-success-800 dark:text-success-100">
              Dismiss
            </NButton>
          </div>
        </div>
      </template>
    </NAlert>

    <NAlert alert="solid-gray">
      <NIcon name="i-lucide-circle-check" />
      <NAlertTitle class="overflow-ellipsis max-w-[calc(100%-4rem)]">
        The selected emails have been marked as spam.
      </NAlertTitle>
      <NButton
        btn="outline-gray"
        class="absolute right-3 top-2.5 h-6 shadow-none"
      >
        Undo
      </NButton>
    </NAlert>

    <NAlert
      alert="soft-amber"
      icon="i-lucide-circle-check"
      title="Plot Twist: This Alert is Actually Amber!"
      description="This one has custom colors for light and dark mode."
    />
  </div>
</template>
