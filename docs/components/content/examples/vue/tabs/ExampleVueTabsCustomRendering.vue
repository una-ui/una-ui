<template>
  <div class="flex flex-col gap-6">
    <NTabs default-value="account" class="max-w-[400px]">
      <NTabsList class="grid grid-cols-2 w-full">
        <NTabsTrigger value="account" leading="i-lucide-user">
          Account
        </NTabsTrigger>
        <NTabsTrigger value="password" leading="i-lucide-lock">
          Password
        </NTabsTrigger>
      </NTabsList>
      <NTabsContent value="account">
        <NCard>
          <NCardHeader>
            <NCardTitle>Account</NCardTitle>
            <NCardDescription>
              Make changes to your account here. Click save when you're
              done.
            </NCardDescription>
          </NCardHeader>
          <NCardContent class="grid gap-6">
            <div class="grid gap-3">
              <NInput id="tabs-demo-name" default-value="Pedro Duarte" />
              <NInput id="tabs-demo-name" default-value="Pedro Duarte" />
            </div>
            <div class="grid gap-3">
              <NLabel for="tabs-demo-username">
                Username
              </NLabel>
              <NInput id="tabs-demo-username" default-value="@peduarte" />
            </div>
          </NCardContent>
          <NCardFooter>
            <NButton>Save changes</NButton>
          </NCardFooter>
        </NCard>
      </NTabsContent>
      <NTabsContent value="password">
        <NCard>
          <NCardHeader>
            <NCardTitle>Password</NCardTitle>
            <NCardDescription>
              Change your password here. After saving, you'll be logged
              out.
            </NCardDescription>
          </NCardHeader>
          <NCardContent class="grid gap-6">
            <div class="grid gap-3">
              <NLabel for="tabs-demo-current">
                Current password
              </NLabel>
              <NInput id="tabs-demo-current" type="password" />
            </div>
            <div class="grid gap-3">
              <NLabel for="tabs-demo-new">
                New password
              </NLabel>
              <NInput id="tabs-demo-new" type="password" />
            </div>
          </NCardContent>
          <NCardFooter>
            <NButton>Save password</NButton>
          </NCardFooter>
        </NCard>
      </NTabsContent>
    </NTabs>
    <NTabs default-value="home">
      <NTabsList>
        <NTabsTrigger value="home">
          Home
        </NTabsTrigger>
        <NTabsTrigger value="settings">
          Settings
        </NTabsTrigger>
      </NTabsList>
    </NTabs>
    <NTabs default-value="home">
      <NTabsList>
        <NTabsTrigger value="home">
          Home
        </NTabsTrigger>
        <NTabsTrigger value="settings" disabled>
          Disabled
        </NTabsTrigger>
      </NTabsList>
    </NTabs>
    <NTabs default-value="preview">
      <NTabsList>
        <NTabsTrigger value="preview">
          <NIcon name="i-lucide-app-window" />
          Preview
        </NTabsTrigger>
        <NTabsTrigger value="code">
          <NIcon name="i-lucide-code" />
          Code
        </NTabsTrigger>
      </NTabsList>
    </NTabs>
  </div>
</template>
