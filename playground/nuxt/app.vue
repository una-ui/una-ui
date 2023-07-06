<script setup lang="ts">
const buttons = [
  'btn-solid',
  'btn-solid-indigo',
  'btn-solid-green',
  'btn-solid-yellow',
  'btn-outline',
  'btn-outline-indigo',
  'btn-outline-green',
  'btn-outline-yellow',
  'btn-soft',
  'btn-soft-indigo',
  'btn-soft-green',
  'btn-soft-yellow',
  'btn-ghost',
  'btn-ghost-indigo',
  'btn-ghost-green',
  'btn-ghost-yellow',
  'btn-link',
  'btn-link-indigo',
  'btn-link-green',
  'btn-link-yellow',

  'btn-solid-white',
  'btn-ghost-white',

  'btn-solid-gray',
  'btn-ghost-gray',
  'btn-link-gray',

  'btn-solid-black',
  'btn-link-black',
]

const isLoading = ref(false)
const input = ref('')
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center container mx-auto gap-4">
    <ColorMode />
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <NButton
        v-for="button in buttons"
        :key="button"
        :class="button"
      >
        {{ button }}
      </NButton>
    </div>

    <form
      class="bg-muted grid grid-cols-1 w-lg gap-4 py-8 px-6 border border-base rounded-md"
    >
      <NFormGroup
        label="Email"
        description="We'll never share your email with anyone else."
        :message="input.length > 0 ? `We'll never share your email with anyone else.` : 'You have entered an invalid email'"
        hint="Optional"
        :status="input.length > 0 ? undefined : 'info'"
        required
      >
        <NInput
          id="email"
          v-model="input"
          :status="input.length > 0 ? undefined : 'info'"
          placeholder="Email"
        />
      </NFormGroup>

      <NFormGroup
        label="Name"
        name="firstname"
        error="Firstname is required"
        required
      >
        <NInput
          id="firstname"
          v-model="input"
          leading="i-carbon-user-avatar-filled"
          placeholder="Firstname"
        />
      </NFormGroup>

      <NFormGroup
        label="Middlename"
        hint="Optional"
      >
        <NInput
          id="middlename"
          input="outline-yellow"
          status="warning"
          placeholder="Middlename"
        />
      </NFormGroup>

      <NFormGroup
        name="lastname"
        label="Lastname"
        required
      >
        <NInput
          id="lastname"
          input="outline-green"
          placeholder="Lastname"
        />
      </NFormGroup>

      <!-- :label="!isLoading ? 'Submit' : 'Processing...'" -->
      <NButton
        btn="solid"
        :label="23434"
        :class="isLoading ? 'animate-pulse' : ''"
        @click="isLoading = !isLoading"
      />

      <NButton
        btn="solid-gray"
        label="Cancel"
        @click="isLoading = !isLoading"
      />
    </form>
  </div>
</template>
