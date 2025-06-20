<template>
  <div class="grid place-items-center">
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
  </div>
</template>
