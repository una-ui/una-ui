<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <!-- You don't need this if you're using the `NToaster` component in the root layout like `app.vue` -->
  <NToaster />

  <div class="grid h-28 place-items-center">
    <div class="flex flex-wrap justify-center gap-2">
      <NButton
        btn="solid-black"
        label="Show toast"
        @click="toast('Event has been created')"
      />

      <NButton
        btn="outline-gray"
        label="With description"
        @click="toast('Event has been created', {
          description: 'Monday, January 3rd at 6:00pm',
        })"
      />
    </div>
  </div>
</template>
