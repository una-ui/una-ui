<script setup lang="ts">
const username = ref('')
const password = ref('')

const loginStatus = ref<'inactive' | 'pending' | 'success' | 'failed'>('inactive')
const loginMessage = ref('')

const open = ref(false)

watch(open, () => {
  // Dialog refs stay loaded. They need to be reset when opened.
  username.value = ''
  password.value = ''
  loginStatus.value = 'inactive'
  loginMessage.value = ''
})

async function sleep(seconds: number) {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

async function submitLogin() {
  loginStatus.value = 'pending'
  loginMessage.value = ''
  await sleep(1)

  if (username.value === 'username' && password.value === 'password') {
    loginStatus.value = 'success'
    loginMessage.value = 'Login success!'
    await sleep(3)
    open.value = false
  }
  else {
    loginStatus.value = 'failed'
    loginMessage.value = 'Invalid Username/Password'
  }
}
</script>

<template>
  <NDialog
    v-model:open="open"
    title="Login"
    description="Please log in with your username and password"
  >
    <template #trigger>
      <NButton btn="outline-gray" label="Login" leading="i-mdi:login" />
    </template>
    <template #default>
      <form
        id="login-form" class="grid space-y-4"
        @submit.prevent="submitLogin()"
      >
        <NFormGroup label="Username">
          <NInput
            v-model="username"
            placeholder=""
            required
            :disabled="loginStatus === 'pending' || loginStatus === 'success'"
          />
        </NFormGroup>
        <NFormGroup label="Password">
          <NInput
            v-model="password"
            type="password"
            required
            :disabled="loginStatus === 'pending' || loginStatus === 'success'"
          />
          <div class="text-end">
            <NPopover>
              <template #trigger>
                <NButton btn="link-muted" class="text-xs text-muted-foreground">
                  Forgot password?
                </NButton>
              </template>
              <div>
                <p>Your username is <span class="font-mono">username</span></p>
                <p>Your password is <span class="font-mono">password</span></p>
              </div>
            </NPopover>
          </div>
        </NFormGroup>
      </form>
    </template>
    <template #footer>
      <span
        v-if="loginMessage"
        class="animate-in animate-duration-1s fade-in slide-in-from-right-4"
        :class="{
          'text-green': loginStatus === 'success',
          'text-red': loginStatus === 'failed',
        }"
      >
        {{ loginMessage }}
      </span>
      <NButton
        type="submit"
        form="login-form"
        btn="solid"
        label="Login"
        leading="i-mdi:login"
        :loading="loginStatus === 'pending'"
        :disabled="loginStatus === 'success'"
      />
    </template>
  </NDialog>
</template>
