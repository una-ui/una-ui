<template>
  <NCard
    title="Create project"
    description="Deploy your new project in one-click."
    class="w-350px" card="outline-gray"
  >
    <div flex="~ col" gap-4>
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
          placeholder="user_password_123"
          leading="i-heroicons-key-20-solid"
          class="bg-base"
          type="password"
        />
      </NFormGroup>
    </div>
    <template #footer>
      <div mt-2 w-full flex="~ justify-end" gap-2>
        <NButton btn="soft-gray">
          Cancel
        </NButton>

        <NButton btn="solid">
          Submit
        </NButton>
      </div>
    </template>
  </NCard>
</template>
