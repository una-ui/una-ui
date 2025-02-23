<script setup lang="ts">

</script>

<template>
  <NSheet>
    <NSheetTrigger as-child>
      <NButton variant="outline">
        Open
      </NButton>
    </NSheetTrigger>
    <NSheetContent>
      <NSheetHeader>
        <NSheetTitle>Edit profile</NSheetTitle>
        <NSheetDescription>
          Make changes to your profile here. Click save when you're done.
        </NSheetDescription>
      </NSheetHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <NLabel for="name" class="text-right">
            Name
          </NLabel>
          <NInput id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <NLabel for="username" class="text-right">
            Username
          </NLabel>
          <NInput id="username" value="@peduarte" class="col-span-3" />
        </div>
      </div>
      <NSheetFooter>
        <NSheetClose as-child>
          <NButton type="submit">
            Save changes
          </NButton>
        </NSheetClose>
      </NSheetFooter>
    </NSheetContent>
  </NSheet>
</template>
