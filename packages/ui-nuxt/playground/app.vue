<script setup lang="ts">
const isLoading = ref(false)
const input = ref('')
</script>

<template>
  <div mx-auto mt-4 container>
    <Tester />

    <div class="mx-auto h-screen flex flex-col items-center justify-center gap-4 container">
      <ColorMode />
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <NButton
          label="Button"
          btn="outline-indigo"
        />
        <NThemeSwitcher />
      </div>

      <form
        class="grid grid-cols-1 w-lg gap-4 border border-base rounded-md bg-muted px-6 py-8"
      >
        <NFormGroup
          label="Email"
          description="We'll never share your email with anyone else."
          :message="input.length > 0 ? `We'll never share your email with anyone else.` : 'You have entered an invalid email'"
          hint="Optional"
          :status="input.length > 0 ? undefined : 'error'"
          required
        >
          <NInput
            v-model="input"
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
            status="success"
            leading="i-heroicons-archive-box-x-mark"
            trailing="i-heroicons-adjustments-vertical-solid"
            placeholder="Firstname"
          />
        </NFormGroup>

        <NFormGroup
          label="Middlename"
          hint="Optional"
        >
          <NInput
            id="middlename"
            input="outline-lime"
            placeholder="Middlename Test"
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

        <NButton
          type="submit"
          btn="solid"
          :label="!isLoading ? 'Submit' : 'Processing...'"
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
  </div>
</template>
