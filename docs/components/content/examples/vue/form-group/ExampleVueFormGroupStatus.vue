<template>
  <div flex="~ col" gap-4>
    <NFormGroup
      label="Username"
      message="Your username is available."
      status="success"
    >
      <NInput
        value="Phojie"
      />
    </NFormGroup>

    <NFormGroup
      label="About Me"
      status="info"
      message="This information will be visible to other users."
    >
      <!-- TODO: change to NTextArea -->
      <NInput />
    </NFormGroup>

    <NFormGroup
      label="Email"
      message="Not a valid email address."
      value="phojrengel@"
      status="error"
    >
      <NInput
        type="password"
        value=""
      />
    </NFormGroup>

    <NFormGroup
      label="Password"
      message="Your password is weak."
      status="warning"
    >
      <NInput
        type="password"
        value="Password"
      />
    </NFormGroup>
  </div>
</template>
