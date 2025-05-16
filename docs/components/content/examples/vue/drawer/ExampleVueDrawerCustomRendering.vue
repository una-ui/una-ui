<template>
  <NDrawer>
    <NDrawerTrigger>
      <NButton btn="solid-gray">
        Open Drawer
      </NButton>
    </NDrawerTrigger>
    <NDrawerContent>
      <NDrawerHeader>
        <NDrawerTitle>Are you absolutely sure?</NDrawerTitle>
        <NDrawerDescription>This action cannot be undone.</NDrawerDescription>
      </NDrawerHeader>
      <NDrawerFooter>
        <NButton>Submit</NButton>
        <NDrawerClose>
          Cancel
        </NDrawerClose>
      </NDrawerFooter>
    </NDrawerContent>
  </NDrawer>
</template>
