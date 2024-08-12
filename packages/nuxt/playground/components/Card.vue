<template>
  <NCard
    class="w-350px"
    card="outline-gray"
    :card-header="{
      class: 'p-0 mb-3',
    }"
  >
    <template #header>
      <!-- image -->
      <img
        src="https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=3972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A beautiful image"
        class="h-40 w-full object-cover"
      >
    </template>

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
