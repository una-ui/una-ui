<template>
  <div class="flex flex-col items-start gap-4">
    <NCard class="max-w-sm w-full">
      <NCardHeader>
        <NCardTitle>Login to your account</NCardTitle>
        <NCardDescription>
          Enter your email below to login to your account
        </NCardDescription>
      </NCardHeader>
      <NCardContent>
        <form>
          <div class="flex flex-col gap-6">
            <div class="grid gap-2">
              <NLabel html-for="email">
                Email
              </NLabel>
              <NInput
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <NLabel html-for="password">
                  Password
                </NLabel>
                <a
                  href="#"
                  class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <NInput id="password" type="password" required />
            </div>
          </div>
        </form>
      </NCardContent>
      <NCardFooter class="flex-col gap-2">
        <NButton type="submit" class="w-full">
          Login
        </NButton>
        <NButton btn="outline-gray" class="w-full">
          Login with Google
        </NButton>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </NCardFooter>
    </NCard>
    <NCard>
      <NCardHeader>
        <NCardTitle>Meeting Notes</NCardTitle>
        <NCardDescription>
          Transcript from the meeting with the client.
        </NCardDescription>
      </NCardHeader>
      <NCardContent class="text-sm">
        <p>
          Client requested dashboard redesign with focus on mobile
          responsiveness.
        </p>
        <ol class="mt-4 flex flex-col list-decimal gap-2 pl-6">
          <li>New analytics widgets for daily/weekly metrics</li>
          <li>Simplified navigation menu</li>
          <li>Dark mode support</li>
          <li>Timeline: 6 weeks</li>
          <li>Follow-up meeting scheduled for next Tuesday</li>
        </ol>
      </NCardContent>
      <NCardFooter>
        <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
          <NAvatar>
            <NAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <NAvatarFallback>CN</NAvatarFallback>
          </NAvatar>
          <NAvatar>
            <NAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <NAvatarFallback>LR</NAvatarFallback>
          </NAvatar>
          <NAvatar>
            <NAvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <NAvatarFallback>ER</NAvatarFallback>
          </NAvatar>
        </div>
      </NCardFooter>
    </NCard>
    <NCard>
      <NCardHeader>
        <NCardTitle>Is this an image?</NCardTitle>
        <NCardDescription>This is a card with an image.</NCardDescription>
      </NCardHeader>
      <NCardContent class="px-0">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="aspect-video object-cover"
          width="500"
          height="500"
        >
      </NCardContent>
      <NCardFooter class="flex items-center gap-2">
        <NBadge badge="outline-gray">
          <NIcon name="i-lucide-bed" /> 4
        </NBadge>
        <NBadge badge="outline-gray">
          <NIcon name="i-lucide-bath" /> 2
        </NBadge>
        <NBadge badge="outline-gray">
          <NIcon name="i-lucide-land-plot" /> 350m²
        </NBadge>
        <div class="ml-auto font-medium tabular-nums">
          $135,000
        </div>
      </NCardFooter>
    </NCard>
    <div class="w-full flex flex-wrap items-start gap-8 md:*:data-[slot=card]:basis-1/4">
      <NCard>
        <NCardContent class="text-sm">
          Content Only
        </NCardContent>
      </NCard>
      <NCard>
        <NCardHeader>
          <NCardTitle>Header Only</NCardTitle>
          <NCardDescription>
            This is a card with a header and a description.
          </NCardDescription>
        </NCardHeader>
      </NCard>
      <NCard>
        <NCardHeader>
          <NCardTitle>Header and Content</NCardTitle>
          <NCardDescription>
            This is a card with a header and a content.
          </NCardDescription>
        </NCardHeader>
        <NCardContent class="text-sm">
          Content
        </NCardContent>
      </NCard>
      <NCard>
        <NCardFooter class="text-sm">
          Footer Only
        </NCardFooter>
      </NCard>
      <NCard>
        <NCardHeader>
          <NCardTitle>Header + Footer</NCardTitle>
          <NCardDescription>
            This is a card with a header and a footer.
          </NCardDescription>
        </NCardHeader>
        <NCardFooter class="text-sm">
          Footer
        </NCardFooter>
      </NCard>
      <NCard>
        <NCardContent class="text-sm">
          Content
        </NCardContent>
        <NCardFooter class="text-sm">
          Footer
        </NCardFooter>
      </NCard>
      <NCard>
        <NCardHeader>
          <NCardTitle>Header + Footer</NCardTitle>
          <NCardDescription>
            This is a card with a header and a footer.
          </NCardDescription>
        </NCardHeader>
        <NCardContent class="text-sm">
          Content
        </NCardContent>
        <NCardFooter class="text-sm">
          Footer
        </NCardFooter>
      </NCard>
    </div>
  </div>
</template>
