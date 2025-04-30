<script setup lang="ts">
import {
  AlertDialogRoot,
  AlertDialogTrigger,
} from 'reka-ui'
import AlertDialogAction from './AlertDialogAction.vue'
import AlertDialogCancel from './AlertDialogCancel.vue'
import AlertDialogContent from './AlertDialogContent.vue'
import AlertDialogDescription from './AlertDialogDescription.vue'
import AlertDialogTitle from './AlertDialogTitle.vue'

function handleAction() {
  alert('clicked action button!')
}
</script>

<template>
  <AlertDialogRoot>
    <AlertDialogTrigger as-child>
      <slot name="trigger" />
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle class="m-0 text-[17px] text-black font-semibold">
        Are you still there? We’ve missed you!
      </AlertDialogTitle>
      <AlertDialogDescription class="mb-5 mt-4 text-sm text-black leading-normal">
        Donny Brasco, a.k.a. the guy who’s been using your account for the last 3 months. I’m just checking in to see if you’re still there. If you are, please let me know by clicking the button below.
      </AlertDialogDescription>
      <div class="flex justify-end gap-4">
        <AlertDialogCancel />
        <AlertDialogAction
          @click="handleAction"
        />
      </div>
    </AlertDialogContent>
  </AlertDialogRoot>
</template>
