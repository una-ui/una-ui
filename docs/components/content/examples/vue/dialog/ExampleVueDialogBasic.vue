<template>
  <NDialog
    title="Edit Profile"
    description="Edit your profile information"
  >
    <template #trigger>
      <NButton btn="outline-gray">
        Open Dialog
      </NButton>
    </template>

    <div class="grid gap-4 py-4">
      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="name">
            Name
          </NLabel>
          <NInput
            id="name"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="email">
            Email
          </NLabel>
          <NInput
            id="email"
            type="email"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <NLabel for="password">
            Current Password
          </NLabel>
          <NInput
            id="password"
            type="password"
            :una="{
              inputWrapper: 'col-span-2',
            }"
          />
        </div>
      </div>
    </div>

    <template #footer>
      <NButton
        btn="solid"
        label="Save Changes"
      />
    </template>
  </NDialog>
</template>
