<script setup lang="ts">
const username = ref('')

const DIALOG_VARIANTS = [{
  label: 'Default',
  una: {},
}, {
  label: 'Custom Animation',
  una: {
    dialogOverlay: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
    dialogContent: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out animate-duration-250',
  },
}, {
  label: 'Custom Size',
  una: {
    dialogContent: 'max-w-xl',
  },
}] as const
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <!-- Variants -->
    <NDialog
      v-for="variant in DIALOG_VARIANTS"
      :key="variant.label"
      title="Edit profile"
      description="Make changes to your profile here. Click save when you're done."
      :una="variant.una"
    >
      <template #trigger>
        <NButton btn="outline">
          {{ variant.label }}
        </NButton>
      </template>

      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <NLabel for="name" class="text-right">
            Name
          </NLabel>
          <NInput id="name" v-model="username" :una="{ inputWrapper: 'col-span-3' }" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <NLabel for="username" class="text-right">
            Username
          </NLabel>
          <NInput id="username" v-model="username" :una="{ inputWrapper: 'col-span-3' }" />
        </div>
      </div>

      <template #footer>
        <NButton type="submit" label="Save changes" />
      </template>
    </NDialog>

    <!-- Prevent close -->
    <NDialog
      prevent-close
      title="Prevent close"
      description="This dialog cannot be closed by clicking outside of it"
    >
      <template #trigger>
        <NButton btn="outline">
          Prevent close
        </NButton>
      </template>

      <div class="grid gap-2">
        <NSkeleton class="h-10" />
        <NSkeleton class="h-30" />
        <NSkeleton class="h-30" />
      </div>
    </NDialog>

    <!-- No title and description -->
    <NDialog>
      <template #trigger>
        <NButton btn="outline">
          No title and description
        </NButton>
      </template>

      <div class="grid gap-2">
        <NSkeleton class="h-10" />
        <NSkeleton class="h-30" />
      </div>
    </NDialog>

    <!-- No close button -->
    <NDialog
      :show-close="false"
      title="No close button"
      description="This dialog has no close button"
    >
      <template #trigger>
        <NButton btn="outline">
          No close button
        </NButton>
      </template>

      <div class="grid gap-2">
        <NSkeleton class="h-10" />
        <NSkeleton class="h-30" />
        <NSkeleton class="h-30" />
      </div>
    </NDialog>
  </div>
</template>
