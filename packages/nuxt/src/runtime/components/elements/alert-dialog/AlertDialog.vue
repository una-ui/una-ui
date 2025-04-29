<script setup lang="ts">
import {
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTrigger,
} from 'reka-ui'
import AlertDialogAction from './AlertDialogAction.vue'
import AlertDialogCancel from './AlertDialogCancel.vue'
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
    <AlertDialogPortal>
      <AlertDialogOverlay class="data-[state=open]:animate-overlayShow dark:bg-blackA9 fixed inset-0 z-30 bg-white/90" />
      <AlertDialogContent
        class="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[100] max-h-[85vh] max-w-[500px] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] text-sm shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
      >
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
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
