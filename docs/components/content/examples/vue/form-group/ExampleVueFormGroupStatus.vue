<script setup lang="ts">
const form = ref({
  username: 'Phojie',
  about: '',
  email: '',
  password: 'Password',
})
</script>

<template>
  <div flex="~ col" gap-4>
    <NFormGroup
      label="Username"
      message="Your username is available."
      status="success"
    >
      <NInput
        v-model="form.username"
      />
    </NFormGroup>

    <NFormGroup
      label="About Me"
      status="info"
      message="This information will be visible to other users."
    >
      <!-- TODO: change to NTextArea -->
      <NInput v-model="form.about" />
    </NFormGroup>

    <NFormGroup
      label="Email"
      message="Not a valid email address."
      status="error"
    >
      <NInput
        v-model="form.email"
      />
    </NFormGroup>

    <NFormGroup
      label="Password"
      message="Your password is weak."
      status="warning"
    >
      <NInput
        v-model="form.password"
        type="password"
      />
    </NFormGroup>
  </div>
</template>
