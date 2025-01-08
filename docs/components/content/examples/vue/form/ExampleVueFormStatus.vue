<template>
  <div class="flex flex-col gap-4">
    <NFormField
      label="Username"
      name="username"
      message="Your username is available."
      status="success"
    >
      <NInput />
    </NFormField>

    <NFormField
      label="About Me"
      name="about"
      status="info"
      message="This information will be visible to other users."
    >
      <NInput type="textarea" />
    </NFormField>

    <NFormField
      label="Email"
      status="error"
      name="email"
      message="Your email is invalid"
    >
      <NInput />
    </NFormField>

    <NFormGroup
      label="Password"
      name="password"
      message="Your password is weak."
      status="warning"
    >
      <NInput
        type="password"
      />
    </NFormGroup>
  </div>
</template>
