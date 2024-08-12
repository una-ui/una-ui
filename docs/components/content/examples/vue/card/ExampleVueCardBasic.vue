<template>
  <NCard title="Create project" description="Deploy your new project in one-click." class="mx-10">
    <div flex="~ col" gap-4>
      <NFormGroup
        label="Email"
      >
        <NInput
          placeholder="phojrengel@gmail.com"
          leading="i-heroicons-envelope-20-solid"
        />
      </NFormGroup>
    </div>
    <template #footer>
      <div mt-2 w-full flex="~ justify-between">
        <NButton btn="solid-gray">
          Submit
        </NButton>
        <NButton btn="outline-gray">
          Cancel
        </NButton>
      </div>
    </template>
  </NCard>
</template>
