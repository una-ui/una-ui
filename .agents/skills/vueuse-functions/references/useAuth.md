---
category: '@Firebase'
---

# useAuth

Reactive [Firebase Auth](https://firebase.google.com/docs/auth) binding. It provides a reactive `user` and `isAuthenticated` so you
can easily react to changes in the users' authentication status.

## Usage

```vue
<script setup lang="ts">
import { useAuth } from '@vueuse/firebase/useAuth'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const app = initializeApp({ /* config */ })
const auth = getAuth(app)
const { isAuthenticated, user } = useAuth(auth)

const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())
</script>

<template>
  <pre v-if="isAuthenticated">{{ user }}</pre>
  <div v-else>
    <button @click="signIn">
      Sign In with Google
    </button>
  </div>
</template>
```

## Type Declarations

```ts
export interface UseFirebaseAuthOptions {
  isAuthenticated: ComputedRef<boolean>
  user: Ref<User | null>
}
/**
 * Reactive Firebase Auth binding
 *
 * @see https://vueuse.org/useAuth
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useAuth(auth: Auth): {
  isAuthenticated: ComputedRef<boolean>
  user: Ref<
    {
      readonly emailVerified: boolean
      readonly isAnonymous: boolean
      readonly metadata: {
        readonly creationTime?: string | undefined
        readonly lastSignInTime?: string | undefined
      }
      readonly providerData: {
        readonly displayName: string | null
        readonly email: string | null
        readonly phoneNumber: string | null
        readonly photoURL: string | null
        readonly providerId: string
        readonly uid: string
      }[]
      readonly refreshToken: string
      readonly tenantId: string | null
      delete: () => Promise<void>
      getIdToken: (forceRefresh?: boolean) => Promise<string>
      getIdTokenResult: (forceRefresh?: boolean) => Promise<IdTokenResult>
      reload: () => Promise<void>
      toJSON: () => object
      readonly displayName: string | null
      readonly email: string | null
      readonly phoneNumber: string | null
      readonly photoURL: string | null
      readonly providerId: string
      readonly uid: string
    } | null,
    | User
    | {
        readonly emailVerified: boolean
        readonly isAnonymous: boolean
        readonly metadata: {
          readonly creationTime?: string | undefined
          readonly lastSignInTime?: string | undefined
        }
        readonly providerData: {
          readonly displayName: string | null
          readonly email: string | null
          readonly phoneNumber: string | null
          readonly photoURL: string | null
          readonly providerId: string
          readonly uid: string
        }[]
        readonly refreshToken: string
        readonly tenantId: string | null
        delete: () => Promise<void>
        getIdToken: (forceRefresh?: boolean) => Promise<string>
        getIdTokenResult: (forceRefresh?: boolean) => Promise<IdTokenResult>
        reload: () => Promise<void>
        toJSON: () => object
        readonly displayName: string | null
        readonly email: string | null
        readonly phoneNumber: string | null
        readonly photoURL: string | null
        readonly providerId: string
        readonly uid: string
      }
    | null
  >
}
```
