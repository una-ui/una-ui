<template>
  <div class="grid w-full place-items-center">
    <NCard
      title="Create account now"
      description="Fill in the form below to create an account."
      class="sm:w-100"
    >
      <div class="flex flex-col gap-4">
        <NFormGroup
          label="Email"
        >
          <NInput
            placeholder="phojrengel@gmail.com"
            leading="i-heroicons-envelope-20-solid"
          />
        </NFormGroup>

        <NFormGroup
          label="Password"
        >
          <NInput
            type="password"
            placeholder="*********"
            leading="i-heroicons-key-20-solid"
          />
        </NFormGroup>
      </div>
      <template #footer>
        <div class="mt-2 w-full flex justify-end gap-4">
          <NButton btn="soft-gray block">
            Login
          </NButton>
          <NButton btn="solid-black block">
            Create an account
          </NButton>
        </div>
      </template>
    </NCard>
  </div>
</template>
