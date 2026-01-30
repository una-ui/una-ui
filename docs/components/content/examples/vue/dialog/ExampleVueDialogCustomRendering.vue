<template>
  <div class="flex flex-col items-start gap-4 md:flex-row">
    <NDialog>
      <form>
        <NDialogTrigger as-child>
          <NButton btn="outline-gray">
            Edit Profile
          </NButton>
        </NDialogTrigger>
        <NDialogContent class="sm:max-w-[425px]">
          <NDialogHeader>
            <NDialogTitle>Edit profile</NDialogTitle>
            <NDialogDescription>
              Make changes to your profile here. Click save when you're
              done.
            </NDialogDescription>
          </NDialogHeader>
          <div class="grid gap-4">
            <div class="grid gap-3">
              <NLabel for="name-1">
                Name
              </NLabel>
              <NInput id="name-1" name="name" default-value="Pedro Duarte" />
            </div>
            <div class="grid gap-3">
              <NLabel for="username-1">
                Username
              </NLabel>
              <NInput id="username-1" name="username" default-value="@peduarte" />
            </div>
          </div>
          <NDialogFooter>
            <NDialogClose as-child>
              <NButton btn="outline-gray">
                Cancel
              </NButton>
            </NDialogClose>
            <NButton type="submit">
              Save changes
            </NButton>
          </NDialogFooter>
        </NDialogContent>
      </form>
    </NDialog>

    <NDialog>
      <NDialogTrigger as-child>
        <NButton btn="outline-gray">
          Scrollable Content
        </NButton>
      </NDialogTrigger>
      <NDialogContent class="sm:max-w-[425px]">
        <NDialogHeader>
          <NDialogTitle>Scrollable Content</NDialogTitle>
          <NDialogDescription>
            This is a dialog with scrollable content.
          </NDialogDescription>
        </NDialogHeader>
        <div class="max-h-[500px] overflow-y-auto px-6 text-sm -mx-6">
          <h4 class="mb-4 text-lg font-medium leading-none">
            Lorem Ipsum
          </h4>
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </NDialogContent>
    </NDialog>

    <NDialog>
      <NDialogTrigger as-child>
        <NButton btn="outline-gray">
          Sticky Footer
        </NButton>
      </NDialogTrigger>
      <NDialogContent class="sm:max-w-lg">
        <NDialogHeader>
          <NDialogTitle>Scrollable Content</NDialogTitle>
          <NDialogDescription>
            This is a dialog with scrollable content.
          </NDialogDescription>
        </NDialogHeader>
        <div class="max-h-[500px] overflow-y-auto px-6 text-sm -mx-6">
          <h4 class="mb-4 text-lg font-medium leading-none">
            Lorem Ipsum
          </h4>
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <NDialogFooter>
          <NDialogClose as-child>
            <NButton btn="outline-gray">
              Close
            </NButton>
          </NDialogClose>
        </NDialogFooter>
      </NDialogContent>
    </NDialog>
  </div>
</template>
